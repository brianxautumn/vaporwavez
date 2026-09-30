import React, { Component } from "react";
import * as THREE from "three";

import { DDSLoader } from './gl/DDSLoader'; //'../node_modules/three/examples/jsm/loaders/DDSLoader';
import { MTLLoader } from './gl/MTLLoader';
import { OBJLoader } from './gl/OBJLoader';

const Background = () => {
  const element = React.useRef(null);
  const camera = React.useRef(null);
  const renderer = React.useRef(null);
  const object = React.useRef(null);
  const scrollPosition = React.useRef(0);

  function onWindowResize() {
    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  }

  const listenToScroll = () => {
    const position = window.pageYOffset;
    scrollPosition.current = position;
  };

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listenToScroll, { passive: true })

    try {
      var scene = new THREE.Scene();
      camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer.current = new THREE.WebGLRenderer({ alpha: true });
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      element.current.appendChild(renderer.current.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.005);
      pointLight.position.z = 10;
      camera.current.add(pointLight);
      scene.add(camera.current);
      camera.current.position.z = 5;

      var animate = function () {
        requestAnimationFrame(animate);
        if (object.current) {
          object.current.rotation.y += randomNumber(0.005, 0.01);
          object.current.rotation.z += randomNumber(0.005, 0.01);
          object.current.rotation.x += randomNumber(0.005, 0.01);
          const ratio = 1 / document.body.scrollWidth * 7000;
          object.current.position.z = (scrollPosition.current / document.body.scrollHeight * 4 * ratio) - ratio - 20;
        }
        renderer.current.render(scene, camera.current);
      };
      animate();

      window.addEventListener('resize', onWindowResize);

      const onProgress = function (xhr) {
        if (xhr.lengthComputable) {
          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
      };

      const onError = function () { };

      const manager = new THREE.LoadingManager();
      manager.addHandler(/\.dds$/i, new DDSLoader());
      new MTLLoader(manager)
        .setPath(process.env.PUBLIC_URL + '/')
        .load('vaporwavez_floppy.mtl', function (materials) {
          materials.preload();
          new OBJLoader(manager)
            .setMaterials(materials)
            .setPath(process.env.PUBLIC_URL + '/')
            .load('vaporwavez_floppy.obj', function (obj) {
              object.current = obj;
              console.log(document.body.scrollWidth)
              object.current.position.z = -1 / document.body.scrollWidth;
              object.current.position.y = -5;
              const newScale = 10;
              object.current.scale.z = newScale;
              object.current.scale.x = newScale;
              object.current.scale.y = newScale;
              object.current.rotation.y = -190;
              scene.add(object.current);
              renderer.current.render(scene, camera.current);
            }, onProgress, onError);
        });
    } catch (error) {
      console.error('Failed to initialize WebGL background:', error);
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);

  return (
    <>
      <div className="canvas-bg" aria-hidden="true" />
      <div id="canvas" ref={element} aria-hidden="true" />
    </>
  )

};

export default Background;