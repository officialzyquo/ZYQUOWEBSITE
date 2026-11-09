import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for all animated elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Refractive Champagne-Gold Geometry (Inner Crystal)
    const geometry = new THREE.IcosahedronGeometry(1.85, 1);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x14120f,
      emissive: 0x050402,
      roughness: 0.15,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(geometry, material);
    mainGroup.add(coreMesh);

    // 2. Outer Architectural Wireframe / Facet Cage in Metallic Champagne Gold
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.15, 1);
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af62,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
      roughness: 0.2,
      metalness: 0.8,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    mainGroup.add(wireframeMesh);

    // 3. Subtle Concentric Orbital Rings (Architectural Precision)
    const ringGeometry = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xb58a3a,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.01, 16, 100), new THREE.MeshBasicMaterial({
      color: 0xd4af62,
      transparent: true,
      opacity: 0.18,
    }));
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    mainGroup.add(ring2);

    // 4. Luxury Floating Particles (Stardust Field)
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xd4af62,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff7e6, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xd4af62, 3.5);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xb58a3a, 2.0);
    rimLight.position.set(-6, -3, -3);
    scene.add(rimLight);

    const warmFill = new THREE.PointLight(0xf5ebdd, 2.0, 15);
    warmFill.position.set(0, 0, 3.5);
    scene.add(warmFill);

    // Interactive Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const onPointerMove = (e: MouseEvent) => {
      targetX = (e.clientX - windowHalfX) * 0.0006;
      targetY = (e.clientY - windowHalfY) * 0.0006;
    };
    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Continuous subtle ambient rotations
      coreMesh.rotation.y += 0.25 * delta;
      coreMesh.rotation.x += 0.15 * delta;

      wireframeMesh.rotation.y -= 0.3 * delta;
      wireframeMesh.rotation.z += 0.18 * delta;

      ring1.rotation.z += 0.15 * delta;
      ring2.rotation.y -= 0.12 * delta;

      // Gentle floating oscillation
      mainGroup.position.y = Math.sin(time * 0.8) * 0.12;

      // Smooth camera interpolation towards mouse pointer
      mainGroup.rotation.y += (targetX - mainGroup.rotation.y * 0.5) * 0.05;
      mainGroup.rotation.x += (targetY - mainGroup.rotation.x * 0.5) * 0.05;

      // Drifting particles
      particles.rotation.y = time * 0.02;
      particles.rotation.x = time * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-70 lg:opacity-90"
      aria-hidden="true"
    />
  );
};
