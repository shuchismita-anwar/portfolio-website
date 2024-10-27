import { url } from "inspector";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { FaGraduationCap, FaFlask } from "react-icons/fa";


export const SkillData = [
  {
    name: "Python",
    Image: "/python.svg",
    width: 80,
    height: 80,
  },
  {
    name: "TensorFlow",
    Image: "/tensorflow.svg",
    width: 80,
    height: 80,
  },
  {
    name: "PyTorch",
    Image: "/pytorch.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Keras",
    Image: "/keras.png",
    width: 180,
    height: 80,
  },
  {
    name: "Scikit-Learn",
    Image: "/scikit-learn.png",
    width: 80,
    height: 80,
  },
  {
    name: "PennyLane",
    Image: "/pennylane.jpeg",
    width: 80,
    height: 80,
  },
  {
    name: "Qiskit",
    Image: "/Qiskit.png",
    width: 80,
    height: 80,
  },
  {
    name: "NumPy",
    Image: "/numpy.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Pandas",
    Image: "/pandas.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Visual Studio Code",
    Image: "/vscode.svg",
    width: 80,
    height: 80,
  },
  {
    name: "LaTeX",
    Image: "/latex.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Redux",
  //   Image: "/redux.png",
  //   width: 80,
  //   height: 80,
  // },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Stripe Payment",
  //   Image: "/stripe.webp",
  //   width: 80,
  //   height: 80,
  // },
  {
    name: "Github",
    Image: "/github1.svg",
    width: 80,
    height: 80,
  },
  {
    name: "C",
    Image: "/c.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg",  // Ensure this path points to the icon for LinkedIn in your `public` folder
    url: "https://www.linkedin.com/in/shuchismita-anwar-034759218/",
  },
  {
    name: "Email",
    src: "/email.svg",  // Ensure this path points to the icon for Email in your `public` folder
    url: "mailto:shuchismita.anwar@gmail.com",
  },
  {
    name: "Github",
    src: "/github.svg",  // Ensure this path points to the icon for GitHub in your `public` folder
    url: "https://github.com/shuchismita-anwar",
  },
  {
    name: "Discord",
    src: "/discord.svg",  // Ensure this path points to the icon for Discord in your `public` folder
    url: "https://discord.com/users/pochita_08",  // Replace with the actual Discord profile link if available
  },
];

export const Projects = [
  { 
    title: "Custom StarDist Model", 
    text: "Trained and used the StarDist model for microscopy image segmentation with custom and pre-trained models.", 
    link: "https://github.com/shuchismita-anwar/Custom-StarDist-Model" 
  },
  { 
    title: "Hybrid Quantum-Classical Neural Networks", 
    text: "Implemented a hybrid quantum-classical neural network model using PyTorch and Qiskit for enhanced computational efficiency.", 
    link: "https://github.com/shuchismita-anwar/Hybrid-quantum-classical-Neural-Networks-with-PyTorch-and-Qiskit" 
  },
  { 
    title: "8-Ball Pool Game", 
    text: "Developed a simple 8-ball pool game using Python and OpenGL with a user-friendly graphical interface.", 
    link: "https://github.com/shuchismita-anwar/8-Ball-Pool" 
  },
  { 
    title: "Heart Stroke Prediction Model", 
    text: "Built a machine learning model to predict the risk of heart stroke using health-related data.", 
    link: "https://github.com/shuchismita-anwar/Heart-Stroke-Prediction-Model" 
  },
  { 
    title: "Conversational Bangla Voice Bot", 
    text: "Created a Bangla voice-activated chatbot with sentiment analysis for context-aware conversation.", 
    link: "https://github.com/Tanjim-Islam/Bangla-Voice-Bot" 
  },
  { 
    title: "Mobile Price Prediction", 
    text: "Built a machine learning model using TensorFlow for predicting mobile prices based on features like RAM, CPU, and camera quality.", 
    link: "https://github.com/shuchismita-anwar/Mobile-Price-prediction" 
  }
];


export const Researches = [
  {
    title: "Hybrid Quantum Convolutional Neural Network Multi-Class Classification with Discarded Qubit Optimization",
    text: "Research on a hybrid quantum-classical convolutional neural network model with adaptive scaling and qubit state discard optimization.",
    details: "This ongoing research focuses on optimizing quantum resources for enhanced accuracy and computational efficiency in classification tasks. By implementing adaptive scaling and qubit discard mechanisms, the model aims to improve classification accuracy for complex medical images, such as those found in the MedMNIST dataset. The research examines hybrid architectures that combine classical and quantum components, exploring benefits in speed and resource efficiency, and seeks to establish benchmarks for quantum-enhanced image classification.",
    image: null, // Set to null if no image is used
  },
  {
    title: "Medical Report Generation and Diagnosis using Multimodal Data and Large Language Models",
    text: "Research on developing a medical report generation system integrating multimodal data with large language models.",
    details: "This research focuses on generating medical reports by synthesizing multimodal data, including patient history, physician notes, and imaging data (e.g., X-rays, MRI scans). Using large language models with integrated image processing, the system aims to enhance diagnostic accuracy and offer data-driven treatment suggestions. The goal is to create an AI-powered assistant capable of aiding medical professionals by automatically producing detailed, contextually accurate reports, which may assist in early diagnosis and provide recommendations based on recognized patterns in historical data.",
    image: null, // Set to null if no image is used
  },

  // Add more items similarly
];


export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/my-researches",
    icon: FaFlask ,
    link: "/my-researches",
  },
  {
    name: "/my-education",
    icon: FaGraduationCap, 
    link: "/my-education",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
