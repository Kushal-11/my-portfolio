export const portfolioData = {
  personal: {
    name: "Kushal Therokar",
    title: "Data Science Graduate & ML/DL Engineer",
    subtitle: "Curious, research-minded builder exploring cross-disciplinary projects. Currently contributing to a book chapter on Explainable AI while balancing deep tech with real-world impact.",
    bio: "I'm a Data Science graduate with a passion for practical AI solutions and explainable AI research. I enjoy building cross-disciplinary projects that bridge the gap between cutting-edge research and real-world applications. When I'm not coding or researching, you can find me on the court playing tennis, table tennis, or padel.",
    currentRole: "Research Assistant, UOP — contributing to a book chapter on Explainable AI",
    contact: {
      email: "kushaltherokar1010@gmail.com",
      phone: "+1 628-358-5903",
      linkedin: "https://www.linkedin.com/in/kushal-therokar/",
      github: "https://github.com/Kushal-11",
      devpost: "https://devpost.com/Kushal-11",
      hackerrank: "https://www.hackerrank.com/profile/Kushal_11"
    },
    stats: [
      { label: "ML accuracy", value: ">95%", description: "Interview tool" },
      { label: "XAI study", value: "R² 0.742", description: "PIRLS 2021" },
      { label: "SIH 2022", value: "1st Prize", description: "Smart India Hackathon" }
    ]
  },
  
  education: [
    {
      degree: "M.S. Data Science",
      institution: "University of the Pacific",
      period: "Aug 2023 – May 2025",
      gpa: "3.85",
      honors: "Phi Kappa Phi"
    },
    {
      degree: "B.E. Computer Engineering",
      institution: "DY Patil College of Engineering",
      period: "2018 – 2022",
      honors: "Honors in Data Science"
    }
  ],
  
  skills: {
    "ML & DL": ["CNNs", "RNNs", "Transformers", "Supervised Learning", "Unsupervised Learning"],
    "Python & Libraries": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    "XAI": ["SHAP", "Interpretability Methods", "Model Explainability"],
    "NLP & LLMs": ["RAG", "Llama-Index", "NLP Pipelines", "Text Processing"],
    "Cloud & DevOps": ["AWS S3", "AWS EC2", "AWS SageMaker", "Docker", "Git"]
  },
  
  experience: [
    {
      role: "Research Assistant",
      company: "University of the Pacific",
      period: "Jan 2025 – Present",
      location: "San Francisco, USA",
      achievements: [
        "Developed and fine-tuned 10 machine learning models on 6,719 educational data samples, with XGBoost achieving the highest performance at 74.2% R²",
        "Created an efficient feature selection strategy that cut the feature space by 75% while preserving 94% of model accuracy",
        "Applied SHAP analysis and partial dependence plots to build an interpretable AI framework that reveals complex feature interactions"
      ]
    },
    {
      role: "AI Researcher",
      company: "Styrk AI",
      period: "Jan 2025 – May 2025",
      location: "Remote",
      achievements: [
        "Conducted comprehensive testing of Styrk AI's 'Armor' defense system across 12 PyTorch-based deep learning models to evaluate adversarial robustness",
        "Leveraged AWS cloud infrastructure (S3, EC2, SageMaker) to enable scalable model training and deployment workflows",
        "Collaborated on SBIR/STTR grant writing initiatives to secure research funding for innovative AI security solutions"
      ]
    },
    {
      role: "Engineering Intern",
      company: "ConductScience",
      period: "Jun – Aug 2024",
      achievements: [
        "Built prototypes for innovative data-driven solutions",
        "Designed and implemented efficient data workflows",
        "Integrated machine learning models into existing product infrastructure"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "SNEH Foundation",
      period: "Sept – Nov 2022",
      achievements: [
        "Performed comprehensive data cleaning and preprocessing for large datasets",
        "Created interactive dashboards for stakeholder decision-making",
        "Generated impact reports that influenced organizational strategy"
      ]
    }
  ],
  
  projects: [
    {
      id: "video-interview-analysis",
      title: "Video Interview Analysis",
      description: "AI-powered video interview analysis system using computer vision and deep learning to assess candidate performance with >95% accuracy.",
      problem: "Traditional interview processes are subjective and time-consuming, lacking standardized evaluation metrics for fair candidate assessment.",
      approach: "Developed a comprehensive system using OpenCV for facial analysis, TensorFlow for emotion recognition, and custom neural networks for behavioral pattern detection. Built an intuitive Tkinter interface for seamless user interaction.",
      techStack: ["OpenCV", "TensorFlow", "Python", "Tkinter", "Computer Vision", "Deep Learning"],
      results: "Achieved >95% accuracy in candidate assessment, won 1st Prize at Smart India Hackathon 2022, and successfully deployed for real-world interview scenarios.",
      metrics: [">95% Accuracy", "1st Prize SIH 2022"],
      timeline: "6 months",
      role: "Lead Developer & ML Engineer",
      category: "CV/Video",
      github: "https://github.com/Kushal-11/video-interview-analysis",
      demo: null
    },
    {
      id: "nl2sql-chatbot",
      title: "NL2SQL Chatbot",
      description: "Natural language to SQL conversion chatbot with memory capabilities and support for complex database queries.",
      problem: "Non-technical users struggle to extract insights from databases due to the complexity of SQL query writing.",
      approach: "Built a Streamlit-based chatbot that converts natural language queries to safe SQL statements. Implemented chat memory for context-aware conversations and support for complex joins and aggregations.",
      techStack: ["Streamlit", "SQLite", "Python", "NLP", "LangChain"],
      results: "Successfully handles complex database queries with natural language input, maintains conversation context, and ensures SQL injection safety.",
      metrics: ["Safe SQL Generation", "Complex Joins Support"],
      timeline: "4 months",
      role: "Full-Stack Developer",
      category: "NLP/LLMs",
      github: "https://github.com/Kushal-11/nl2sql-chatbot",
      demo: "https://nl2sql-demo.streamlit.app"
    },
    {
      id: "accessibility-advocate-ai",
      title: "Accessibility Advocate AI",
      description: "AI-powered assistive technology designed to improve digital accessibility for teenagers with hearing loss.",
      problem: "Teenagers with hearing loss face significant barriers in accessing digital content and educational materials.",
      approach: "Developed an AI system that provides real-time transcription, visual cues, and adaptive interfaces to enhance digital accessibility for hearing-impaired users.",
      techStack: ["Python", "Speech Recognition", "Computer Vision", "React", "Accessibility APIs"],
      results: "Improved digital accessibility for target users, received positive feedback from accessibility advocacy groups.",
      metrics: ["Accessibility Improved", "User Feedback Positive"],
      timeline: "5 months",
      role: "AI Developer & UX Researcher",
      category: "AI/Accessibility",
      github: "https://github.com/Kushal-11/accessibility-advocate-ai",
      demo: null
    },
    {
      id: "xai-research-pirls",
      title: "XAI Research PIRLS 2021",
      description: "Comprehensive explainable AI research project analyzing PIRLS 2021 educational data with advanced interpretability methods.",
      problem: "Educational assessment models lack transparency, making it difficult for educators to understand factors affecting student performance.",
      approach: "Applied XGBoost modeling with R² 0.742 performance, implemented SHAP values, Partial Dependence Plots, and counterfactual analysis. Conducted fairness checks and developed a compact 5-feature model with 94% accuracy retention.",
      techStack: ["XGBoost", "SHAP", "Python", "Scikit-learn", "Pandas", "Matplotlib"],
      results: "Achieved R² 0.742 with full model, created interpretable 5-feature model retaining 94% accuracy, provided actionable insights for educational policy.",
      metrics: ["R² 0.742", "94% Accuracy Retention", "5-Feature Model"],
      timeline: "8 months",
      role: "Research Lead & Data Scientist",
      category: "XAI/Research",
      github: "https://github.com/Kushal-11/xai-pirls-research",
      demo: null
    },
    {
      id: "transcript-capstone",
      title: "Transcript Capstone",
      description: "Automated transcript processing pipeline with OCR capabilities and interactive dashboard for data visualization.",
      problem: "Manual transcript processing is time-consuming and error-prone, requiring automated solutions for efficient data extraction and analysis.",
      approach: "Built a comprehensive PDF/OCR pipeline for transcript data extraction, integrated with Shiny for Python to create interactive dashboards for data visualization and analysis.",
      techStack: ["Python", "OCR", "PDF Processing", "Shiny for Python", "Data Visualization"],
      results: "Automated transcript processing with high accuracy, created user-friendly dashboard for data exploration and insights generation.",
      metrics: ["Automated Processing", "Interactive Dashboard"],
      timeline: "3 months",
      role: "Data Engineer & Dashboard Developer",
      category: "Data Pipelines",
      github: "https://github.com/Kushal-11/transcript-capstone",
      demo: null
    },
    {
      id: "memewars",
      title: "Memewars",
      description: "AI-enhanced meme application with React frontend, Python agents, and competitive leaderboard system.",
      problem: "Social media lacks engaging, AI-powered platforms for creative content generation and community interaction.",
      approach: "Developed a full-stack application with React frontend and Python backend agents. Implemented AI-powered meme generation, voting system, and competitive leaderboards for user engagement.",
      techStack: ["React", "Python", "AI Agents", "Node.js", "Database"],
      results: "Created engaging platform for meme creation and sharing, implemented successful voting and leaderboard systems.",
      metrics: ["AI-Enhanced", "Leaderboard System"],
      timeline: "4 months",
      role: "Full-Stack Developer",
      category: "Frontend",
      github: "https://github.com/Kushal-11/memewars",
      demo: null
    }
  ]
};

export default portfolioData;

