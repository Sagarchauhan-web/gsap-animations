import gsap from 'gsap';

gsap.to('.box', {
  opacity: 1,
  rotation: 360,
  // background: '#ff6f61',
  borderRadius: '50%',
  scale: 1.05,
  duration: 5,
  delay: 0.1,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true,
});
