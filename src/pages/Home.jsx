import React, { useRef, useEffect, useState } from 'react';
import './Home.css';
import BentoSection from '../components/BentoSection';
import robotAnimation from "../assets/developing.json";
import { lazy, Suspense } from "react";

const Lottie = lazy(() => import("lottie-react"));
/* ── tiny inline helpers ── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Counter animation ── */
const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1400;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
          start = Math.min(start + step, end);
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const Home = ({ onNavigate }) => {
  const servicesRef = useRef(null);

  const services = [
    {
      icon: '⬡',
      label: 'Software Dev',
      title: 'Custom Software',
      desc: 'High-performance, scalable applications built on modern frameworks like React and Angular.',
      tags: ['React', 'Angular', 'Node.js'],
    },
    {
      icon: '◎',
      label: 'Mobile',
      title: 'Mobile Apps',
      desc: 'Seamless iOS and Android experiences using Flutter and native technologies for global reach.',
      tags: ['iOS', 'Android', 'Flutter'],
    },
    {
      icon: '◈',
      label: 'Web Dev',
      title: 'Web Development',
      desc: 'Enterprise-grade web solutions utilizing Next.js and high-security backend architectures.',
      tags: ['Next.js', 'React', 'TypeScript'],
    },
    {
      icon: '⬟',
      label: 'Odoo ERP',
      title: 'Odoo Solutions',
      desc: 'Authorized partner services for full-cycle ERP implementation, migration, and custom module growth.',
      tags: ['Implementation', 'Migration', 'Support'],
    },
    {
      icon: '✧',
      label: 'AI Services',
      title: 'AI & Data Science',
      desc: 'Cutting-edge Agentic AI, automation, and MCP server integrations to future-proof your business.',
      tags: ['Agentic AI', 'MCP Servers', 'Automation'],
    },
    {
      icon: '✦',
      label: 'Scaling',
      title: 'Staff Augmentation',
      desc: 'Bridge the talent gap with expert developers and AI specialists for your critical projects.',
      tags: ['Expert Hiring', 'Remote Teams', 'Experts'],
    },
  ];

  const testimonials = [
    {
      text: 'Another project completed successfully. Kudos for your hard work, sound intuition and detail-oriented approach.',
      name: 'Eval Asebe',
      role: 'CEO, Seeries.Com',
      country: 'United States',
      rating: 5,
    },
    {
      text: 'They took a big idea and made it a reality. Team literally set us up for the next stage of growth. Definite rehire.',
      name: 'Michael Marcus',
      role: 'Founder, AdenaData',
      country: 'United States',
      rating: 5,
    },
    {
      text: 'These guys are awesome — prompt, execute, and rare in the world of freelancing. They will never disappoint.',
      name: 'Eval Asebe',
      role: 'Founder, SwoopMeals',
      country: 'United States',
      rating: 5,
    },
  ];

  const techItems = [
    {
      name: 'React',
      logo: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61DAFB" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" /></svg>
    },
    {
      name: 'Node.js',
      logo: <svg viewBox="0 0 24 24" fill="#539E43"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.5 3.75L12 11.8 4.5 8.05 12 4.3zM4 9.5l7 3.5V20L4 16.5V9.5zm9 10.5v-7.5l7-3.5v7L13 20z" /></svg>
    },
    {
      name: 'Python',
      logo: <svg viewBox="0 0 24 24"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.03v-2.867s-.109-3.403 3.348-3.403h5.771s3.24.052 3.24-3.13V3.129S18.28 0 11.914 0zm-3.21 1.81a1.039 1.039 0 110 2.077 1.039 1.039 0 010-2.077z" fill="#3776AB" /><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.03v2.867s.109 3.403-3.348 3.403H9.448s-3.24-.052-3.24 3.13v5.273S5.72 24 12.086 24zm3.21-1.81a1.039 1.039 0 110-2.077 1.039 1.039 0 010 2.077z" fill="#FFD343" /></svg>
    },
    {
      name: 'TypeScript',
      logo: <svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#3178C6" /><path d="M13.5 15.5v1.6c.4.2.8.3 1.3.4.5.1 1 .1 1.5.1.5 0 .9-.1 1.3-.2.4-.1.8-.3 1.1-.5.3-.2.6-.5.7-.9.2-.4.3-.8.3-1.3 0-.4-.1-.7-.2-1-.1-.3-.3-.5-.5-.8-.2-.2-.5-.4-.8-.6-.3-.2-.6-.3-1-.5-.3-.1-.5-.2-.7-.3-.2-.1-.4-.2-.5-.3-.1-.1-.2-.2-.3-.3-.1-.1-.1-.2-.1-.4 0-.1 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.3-.1.5-.2.2 0 .4-.1.6-.1.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.5.3.2.1.3.2.4.4V10c-.3-.2-.7-.3-1.1-.4-.4-.1-.8-.1-1.3-.1-.5 0-.9.1-1.3.2-.4.1-.7.3-1 .5-.3.2-.5.5-.7.8-.2.3-.2.7-.2 1.1 0 .6.2 1.1.5 1.5.3.4.8.7 1.5 1 .3.1.5.2.8.3.3.1.5.2.6.3.2.1.3.2.4.4.1.1.1.3.1.5 0 .1 0 .3-.1.4-.1.1-.2.2-.3.3-.1.1-.3.2-.5.2-.2.1-.4.1-.7.1-.4 0-.9-.1-1.3-.3-.5-.2-.9-.5-1.2-.8zM8.5 11H11v8h1.9v-8h2.5V9H8.5v2z" fill="white" /></svg>
    },
    {
      name: 'Next.js',
      logo: <svg viewBox="0 0 24 24" fill="white"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 012.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.317 12.317 0 002.465-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.499-.054z" /></svg>
    },
    {
      name: 'Vue.js',
      logo: <svg viewBox="0 0 24 24"><path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z" fill="#41B883" /><path d="M12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z" fill="#41B883" /><path d="M9.59 2.23L12 6.41l2.41-4.18H9.59z" fill="#35495E" /></svg>
    },
    {
      name: 'Flutter',
      logo: <svg viewBox="0 0 24 24"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.159 11.27l-4.24 4.24 4.24 4.241L24 10.09l-3.745-3.75-5.782 4.93zm-4.24 8.48L14.474 24h7.37l-8.451-8.451-3.16 4.2z" fill="#54C5F8" /></svg>
    },
    {
      name: 'AWS',
      logo: <svg viewBox="0 0 24 24"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.240-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.264-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.224-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.025-.527.27-.351 3.384 1.963 7.559 3.147 11.877 3.147 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.613z" fill="#FF9900" /><path d="M22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.319-.79 1.031-2.566.695-2.994z" fill="#FF9900" /></svg>
    },
    {
      name: 'Docker',
      logo: <svg viewBox="0 0 24 24"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#2496ED" /></svg>
    },
    {
      name: 'PostgreSQL',
      logo: <svg viewBox="0 0 24 24"><path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.253.395 3.007.754 2.06 1.58 1.11 2.409.556 3.633.594 5.276c.03 1.295.346 2.689 1.152 3.77a3.071 3.071 0 001.955 1.355c.068.015.137.023.206.024a2.1 2.1 0 001.07-.258c.114-.076.225-.164.326-.262.2.134.412.24.635.322.138 1.922.65 3.809 1.52 5.36a8.56 8.56 0 001.014 1.532c.164.184.345.37.553.522.115.084.244.16.387.218.143.059.301.092.465.093.131 0 .261-.022.384-.06.372-.123.68-.367.966-.62.098.284.234.55.407.794.214.304.494.57.837.736.344.167.72.249 1.107.249.382 0 .778-.087 1.102-.27.337-.19.577-.45.787-.728.107-.143.2-.296.293-.453.184.106.382.188.59.24.117.03.235.043.354.043.51.013.996-.152 1.367-.478.371-.326.572-.792.587-1.315.013-.464-.102-.959-.354-1.474a6.016 6.016 0 00-.305-.546c.28-.302.487-.67.601-1.077.14-.485.175-.994.128-1.5-.046-.505-.183-.996-.403-1.448-.22-.452-.52-.851-.877-1.168-.264-.23-.557-.409-.868-.537.33-.372.597-.791.792-1.244.303-.703.416-1.476.322-2.226-.094-.75-.37-1.461-.8-2.026zM4.477 12.277a1.75 1.75 0 01-.635-.35c-.31-.256-.537-.618-.66-1.11a5.657 5.657 0 01-.072-1.942c.093-.696.298-1.32.555-1.813.18-.343.455-.773.828-1.041.11-.08.22-.143.336-.19.002.019.004.037.007.056.042.285.107.565.193.843l.13.418-.05.098c-.065.13-.12.263-.169.396-.29.79-.34 1.567-.217 2.12a1.85 1.85 0 00.317.694c.124.15.261.267.41.33zm-.586-8.48c-.01-.083-.015-.165-.008-.248.036-.476.267-.843.568-1.084.3-.24.689-.353 1.084-.36a2.6 2.6 0 01.635.07c-.163.14-.32.3-.47.483-.295.36-.528.795-.68 1.26-.14.43-.2.88-.178 1.308-.055-.028-.11-.06-.162-.093-.301-.188-.564-.46-.789-.837zm7.04 10.617a5.1 5.1 0 01-.476-.664c-.33-.546-.59-1.195-.77-1.918a13.4 13.4 0 01-.335-2.55c.29.033.576.042.84.027.273-.015.528-.055.76-.115.27-.07.542-.163.794-.29.104.576.231 1.16.384 1.743a15.6 15.6 0 00.586 1.765c-.087.12-.174.247-.257.377a5.042 5.042 0 00-.526 1.625zm2.15-.93c.024-.24.073-.476.143-.706.098.13.184.266.255.407a1.98 1.98 0 01.19.555c-.116.029-.234.047-.354.054a2.65 2.65 0 01-.234-.31zm-.826-6.073c-.036-.123-.07-.245-.104-.366a14.51 14.51 0 01-.357-1.766c.024-.115.04-.232.05-.35.026-.27.028-.534.01-.803.1.03.194.072.282.126.158.096.3.225.43.39.19.238.347.544.446.91.1.366.132.77.09 1.174-.04.372-.15.73-.305 1.02a2.23 2.23 0 01-.134.214c-.134-.168-.274-.34-.408-.549zm-3.41 1.376c.117-.069.237-.133.361-.19.127-.06.26-.112.396-.16.144-.05.295-.093.454-.128a10.5 10.5 0 01-.013.4c-.02.46-.002.92.048 1.368a10.267 10.267 0 00.48 2.077 9.44 9.44 0 01-.524-.095 3.437 3.437 0 01-.528-.178c-.345-.153-.633-.392-.815-.73a3.74 3.74 0 01-.303-1.028 5.025 5.025 0 01-.046-.6c.166-.24.32-.492.49-.736zm2.88-4.9c.074.387.154.777.252 1.168a4.67 4.67 0 00-.81-.226 5.138 5.138 0 00-.807-.07c.11-.26.236-.506.38-.739.152-.244.316-.466.49-.656.167.167.33.342.495.523zm5.04 7.08c.133.268.225.544.27.826.046.285.042.575-.003.845-.05.284-.162.555-.342.78a1.398 1.398 0 01-.627.47 1.5 1.5 0 01-.844.035 1.73 1.73 0 01-.745-.388 3.06 3.06 0 01-.265-.28c.08-.37.132-.741.162-1.109a10.76 10.76 0 00.035-1.183c.177-.274.335-.563.476-.86.103-.22.192-.443.271-.666.104.143.19.296.255.453l.034.086.084.096c.2.22.375.47.514.734c.07.133.14.27.193.41l.032.087zm-1.88-2.81a9.96 9.96 0 01-.538 1.432c-.177-.45-.378-.906-.597-1.355-.213-.44-.437-.876-.666-1.3.214-.02.418-.02.617-.005.36.026.695.108.987.244.31.143.571.347.76.613-.22.113-.397.24-.563.37zm1.455-.698c.12-.178.272-.34.449-.475.126-.097.268-.181.419-.251a3.71 3.71 0 01-.012.37 3.47 3.47 0 01-.095.564 3.032 3.032 0 01-.143.46c-.064.152-.14.3-.23.44a2.12 2.12 0 00-.388-.96zm-8.247-2.2a10.3 10.3 0 01-.38-1.56 5.7 5.7 0 01.476.065c.3.053.58.14.834.263a3.2 3.2 0 01.697.443 3.83 3.83 0 01-.352.1 5.47 5.47 0 00-.79.27 5.6 5.6 0 00-.485.419z" fill="#336791" /></svg>
    },
    {
      name: 'MongoDB',
      logo: <svg viewBox="0 0 24 24"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#47A248" /></svg>
    },
    {
      name: 'Kubernetes',
      logo: <svg viewBox="0 0 24 24"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.004.005a.44.44 0 01.485.606zm-.833-2.129a.44.44 0 01.173-.756l.002-.011 2.585-.885v.006a.44.44 0 01.49.282.44.44 0 01-.19.531l.006.008-2.198 1.497a5.2 5.2 0 01-.868-1.672zm4.853-4.027a.44.44 0 01.574-.18l.006-.012 2.188 1.502a5.2 5.2 0 01-.869 1.669l-2.195-1.5.007-.008a.44.44 0 01.289-.47zm-.487 1.935a.44.44 0 01.486-.607l.004-.005 2.584.437a5.183 5.183 0 01-2.079 2.597l-1-2.415.007-.01zM12 7.001a5.183 5.183 0 011.997.397L12.999 9.93l.007.002a.44.44 0 01-.999-.001l.006-.003L11.01 7.4a5.184 5.184 0 01.99-.399zm0 9.998a5.171 5.171 0 01-2.007-.4l1.01-2.437.006.003a.44.44 0 01.987.001l.005-.003 1.007 2.437A5.171 5.171 0 0112 16.999zM12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" fill="#326CE5" /></svg>
    },
    {
      name: 'Redis',
      logo: <svg viewBox="0 0 24 24"><path d="M10.84 8.334l2.812-1.15 2.837 1.133-2.836 1.17zm10.148 1.895l-3.057 1.255-2.886-1.156 2.902-1.19zM12 9.56l2.982 1.194-2.982 1.23-2.982-1.23zm-9.23 1.68l2.903 1.19-2.89 1.151-3.058-1.255zM3.4 15.4a.4.4 0 10.8 0 .4.4 0 000-.8zm16 0a.4.4 0 100 .8.4.4 0 000-.8zm-7.2-1.6c-3.644 0-6.4-.778-6.4-1.8S8.556 10.2 12.2 10.2s6.4.778 6.4 1.8-2.756 1.8-6.4 1.8z" fill="#DC382D" /></svg>
    },
    {
      name: 'Figma',
      logo: <svg viewBox="0 0 24 24"><path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" /><path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" /><path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" /><path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" /><path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" /></svg>
    },
  ];

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid-lines" />
        </div>

        <div className="container hero-inner">
          <div className="hero-content">
            <h1 className="hero-title fade-up fade-up-delay-1">
              Build Tomorrow's
              <br />
              <span className="hero-title-gold">Digital Future</span>
              <br />
              Today
            </h1>

            <p className="hero-desc fade-up fade-up-delay-2">
              We deliver cutting-edge software solutions, Odoo ERP implementations, and full-stack digital transformation services that propel your business into the future.
            </p>

            <div className="hero-actions fade-up fade-up-delay-3">
              <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
                Start Your Project <ArrowRight />
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </button>
            </div>

            <div className="hero-stats fade-up fade-up-delay-4">
              {[
                { n: 50, s: '+', label: 'Projects Delivered' },
                { n: 30, s: '+', label: 'Happy Clients' },
                { n: 15, s: '+', label: 'Years Experience' },
                { n: 25, s: '+', label: 'Team Members' },
              ].map(({ n, s, label }) => (
                <div key={label} className="hero-stat">
                  <strong><Counter end={n} suffix={s} /></strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual fade-up fade-up-delay-2">
            <div className="hero-image-wrap">
              <Suspense fallback={null}>
                <Lottie
                  animationData={robotAnimation}
                  loop={true}
                  autoplay={true}
                  className="hero-img"
                />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint" onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── TICKER with tech logos ── */}
      <div className="ticker">
        <div className="ticker-inner">
          {[...techItems, ...techItems].map((t, i) => (
            <React.Fragment key={i}>
              <span className="ticker-item">
                <span className="ticker-logo">{t.logo}</span>
                {t.name}
              </span>
              {i % techItems.length !== techItems.length - 1 && (
                <span className="ticker-sep" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services-section" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">
              Full-Spectrum<br /><span>IT Solutions</span>
            </h2>
            <p className="section-desc">
              From concept to deployment, we cover every technology need your business demands.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card" onClick={() => onNavigate('services')}>
                <div className="sc-icon">{s.icon}</div>
                <div className="sc-label">{s.label}</div>
                <h3 className="sc-title">{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>
                <div className="sc-tags">
                  {s.tags.map(t => <span key={t} className="sc-tag">{t}</span>)}
                </div>
                <div className="sc-arrow"><ArrowRight /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO SECTION ── */}
      <BentoSection onNavigate={onNavigate} />

      {/* ── ODOO SPOTLIGHT ── */}
      <section className="odoo-spot">
        <div className="container odoo-spot-inner">
          <div className="odoo-spot-content">
            <div className="section-label">Authorized Partner</div>
            <h2 className="section-title">
              Odoo ERP<br /><span>Implementation</span>
            </h2>
            <p className="section-desc">
              Transform your operations with Odoo's all-in-one business platform. As a authorised Odoo partner, we handle everything from initial setup to custom module development.
            </p>
            <ul className="odoo-spot-features">
              {[
                'Full ERP Implementation & Migration',
                'Custom Module Development',
                'System Integration & API',
                'Training & Ongoing Support',
                'Performance Optimization',
              ].map(f => (
                <li key={f}>
                  <span className="check-circle"><CheckIcon /></span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="odoo-spot-actions">
              <button className="btn btn-gold" onClick={() => onNavigate('odoo')}>
                Explore Odoo Solutions <ArrowRight />
              </button>
              <button className="btn btn-outline" onClick={() => onNavigate('contact')}>
                Free Consultation
              </button>
            </div>
          </div>

          <div className="odoo-spot-visual">
            <div className="odoo-modules-grid">
              {[
                { icon: '/accounting.svg', name: 'Accounting' },
                { icon: '/inventory.svg', name: 'Inventory' },
                { icon: '/sales.svg', name: 'Sales' },
                { icon: '/crm.svg', name: 'CRM' },
                { icon: '/manufacturing.svg', name: 'Manufacturing' },
                { icon: '/hr.svg', name: 'HR' },
                { icon: '/purchase.svg', name: 'Purchase' },
                { icon: '/dashboard.svg', name: 'Analytics' },
              ].map((m, i) => (
                <div key={m.name} className="odoo-mod" style={{ animationDelay: `${i * 0.06}s` }}>
                  <span><img src={m.icon} alt={m.name} className="odoo-home-mod-svg" /></span>
                  <small>{m.name}</small>
                </div>
              ))}
            </div>
            {/* <div className="odoo-badge">
              <span className="odoo-badge-icon">
                <img
                  src="/odoo_logo.png"
                  alt="Odoo Logo"
                  className="odoo-logo"
                />
              </span>
              <strong>Authorised</strong>
              <span>Odoo Partner</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-us">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Why Atya Inno</div>
            <h2 className="section-title">
              The Difference That<br /><span>Matters</span>
            </h2>
          </div>

          <div className="why-grid">
            {[
              { n: '01', title: 'Proven Track Record', desc: '50+ successful projects delivered across industries with 100% client satisfaction.' },
              { n: '02', title: 'Expert Team', desc: 'Highly skilled professionals with 15+ years average experience in cutting-edge technologies.' },
              { n: '03', title: 'Tailored Solutions', desc: 'No cookie-cutter approaches — every solution is architected specifically for your needs.' },
              { n: '04', title: 'Transparent Process', desc: 'Real-time updates, clear communication, and full visibility throughout the project lifecycle.' },
              { n: '05', title: 'Competitive Pricing', desc: 'World-class quality at competitive rates. Maximum ROI for your technology investment.' },
              { n: '06', title: 'Post-Launch Support', desc: 'Dedicated support and maintenance ensuring your solution stays optimized long-term.' },
            ].map(w => (
              <div key={w.n} className="why-card">
                <span className="why-num">{w.n}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-inner">
            <div className="home-cta-glow" />
            <div className="home-cta-content">
              <div className="section-label">Ready to Start?</div>
              <h2 className="section-title">
                Let's Build Something<br /><span>Extraordinary</span>
              </h2>
              <p className="section-desc">
                Get in touch today and let's discuss how we can transform your business with the right technology.
              </p>
              <div className="cta-actions">
                <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
                  Start Your Project <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;