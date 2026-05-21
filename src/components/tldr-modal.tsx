import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "./ui/social-icons";
import {
  Terminal as TerminalIcon,
  Briefcase,
  Trophy,
  GraduationCap,
  MapPin,
  Download,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  CornerDownLeft,
  X
} from "lucide-react";

interface TldrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogLine {
  id: string;
  type: "command" | "output" | "error" | "system";
  text: string;
  isTyping?: boolean;
}

const COMMAND_OUTPUTS: Record<string, string> = {
  whoami: `AYUSH TIWARI (guest@ayush-tiwari:~# whoami)
--------------------------------------------------
Role:     Upcoming SDE-1 @ Eternal (Starting June 2026)
Edu:      B.Tech + M.Tech Dual Degree, IIT Bhubaneswar (CGPA: 8.5/10.0)
Focus:    Agentic AI, Systems Engineering, Machine Learning

I build resilient systems and orchestrate multi-agent LLM pipelines. 
My goal is to translate advanced ML concepts and high-throughput backend 
architectures into production-ready business solutions.`,

  milestones: `KEY MILESTONES (guest@ayush-tiwari:~# milestones)
--------------------------------------------------
• HackerRank Orchestrate Hackathon: Global Rank 50 / 1,349 (Top 3.7% worldwide)
  - Designed & built a multi-domain corrective RAG agent pipeline.
• ICPC 2025 Prelims: All India Rank 1114 (Top 2.5% in India)
• Eternal Day 0 Placement: Shortlisted in top 5% of candidates.
• Governor, Web & Design Society: Coordinated campus platforms
  - Managed core GC apps serving 2,900+ active student users.
• ML Research: Graph Neural Network model for thermoelectric material
  - Published in ACS Applied Energy Materials (2025).`,

  "tech-stack": `TECHNICAL INVENTORY (guest@ayush-tiwari:~# tech-stack)
--------------------------------------------------
[Agentic AI & ML]
  - LangChain, Multi-Agent Graphs, Corrective RAG (CRAG), GNNs (CGCNN, MEGNet)
[Backend & Systems]
  - FastAPI, Node.js, Express.js, Kafka, PostgreSQL, MongoDB, Redis, Stripe API
[Cloud & DevOps]
  - AWS Lambda, SQS, SNS, Docker, Prometheus, Grafana, OpenTelemetry, Zipkin, CI/CD
[Frontend]
  - React, Next.js, React Native, TypeScript, Tailwind CSS, Framer Motion`,

  contact: `CONNECTION PROTOCOLS (guest@ayush-tiwari:~# contact)
--------------------------------------------------
• GitHub:   github.com/ayushtiwari110
• LinkedIn: linkedin.com/in/tiwari-ayush
• Email:    21mm02005@iitbbs.ac.in

System Status: ONLINE (Ping: 42ms OK)`,

  help: `SUPPORTED COMMANDS (guest@ayush-tiwari:~# help)
--------------------------------------------------
  whoami      - Brief professional overview and focus.
  milestones  - Top competitive coding & research records.
  tech-stack  - Expert technologies, frameworks & concepts.
  contact     - Social profiles and communication links.
  help        - Displays this navigation assistance.
  clear       - Flush the terminal buffer.`
};

export default function TldrModal({ isOpen, onClose }: TldrModalProps) {
  const [terminalHistory, setTerminalHistory] = useState<LogLine[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("whoami");
  
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Disable body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Initialize with welcome messages and default whoami
      setTerminalHistory([
        { id: "sys-1", type: "system", text: "Initializing AyushTiwari-OS v1.0.4..." },
        { id: "sys-2", type: "system", text: "Establishing secure link on port 443..." },
        { id: "sys-3", type: "system", text: "Ready. Type a command or click the buttons below to query." },
        { id: "cmd-init", type: "command", text: "whoami" },
        { id: "out-init", type: "output", text: COMMAND_OUTPUTS.whoami }
      ]);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    const newHistory = [...terminalHistory, { id: `cmd-${Date.now()}`, type: "command" as const, text: cmd }];

    if (trimmedCmd === "clear") {
      setTerminalHistory([]);
      setInputValue("");
      return;
    }

    if (COMMAND_OUTPUTS[trimmedCmd]) {
      newHistory.push({
        id: `out-${Date.now()}`,
        type: "output",
        text: COMMAND_OUTPUTS[trimmedCmd],
        isTyping: true
      });
      setActiveTab(trimmedCmd);
    } else {
      newHistory.push({
        id: `err-${Date.now()}`,
        type: "error",
        text: `Command not found: "${cmd}". Type 'help' for valid protocols.`
      });
    }

    setTerminalHistory(newHistory);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputValue);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("21mm02005@iitbbs.ac.in");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-5xl h-[90vh] md:h-[650px] bg-slate-950/90 dark:bg-black/95 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
          >
            {/* Cyberpunk grid overlay background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

            {/* Left: Terminal Console (60% width) */}
            <div 
              className="flex-1 flex flex-col h-1/2 md:h-full md:w-3/5 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-950/40 relative"
              onClick={focusTerminal}
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/60 border-b border-slate-800/80 select-none">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
                  </div>
                  <TerminalIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">ayush-tiwari@agent-os: ~</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 bg-slate-850 px-2 py-0.5 rounded border border-slate-800/50">
                  SH: Interactive
                </div>
              </div>

              {/* Terminal Outputs */}
              <div className="flex-1 p-5 overflow-y-auto font-mono text-[13px] leading-relaxed space-y-4 scrollbar-thin text-slate-300">
                {terminalHistory.map((line) => {
                  if (line.type === "system") {
                    return (
                      <div key={line.id} className="text-slate-500 italic text-xs select-none">
                        * {line.text}
                      </div>
                    );
                  }
                  if (line.type === "command") {
                    return (
                      <div key={line.id} className="flex items-center gap-2 text-emerald-400">
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <span className="font-bold">guest@ayush-tiwari:~# {line.text}</span>
                      </div>
                    );
                  }
                  if (line.type === "error") {
                    return (
                      <div key={line.id} className="text-red-400/90 font-medium">
                        {line.text}
                      </div>
                    );
                  }
                  // output type
                  return (
                    <div key={line.id} className="whitespace-pre-wrap pl-2 border-l border-indigo-500/20 text-slate-300">
                      {line.isTyping ? (
                        <Typewriter text={line.text} speed={2} />
                      ) : (
                        line.text
                      )}
                    </div>
                  );
                })}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Quick Button Toggles */}
              <div className="px-5 py-3 border-t border-slate-900/80 bg-slate-950/80 flex flex-wrap gap-2 select-none">
                {Object.keys(COMMAND_OUTPUTS).map((cmd) => (
                  <button
                    key={cmd}
                    onClick={(e) => {
                      e.stopPropagation();
                      executeCommand(cmd);
                    }}
                    className={`px-3 py-1 rounded-lg border font-mono text-xs transition-all duration-200 ${
                      activeTab === cmd
                        ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    {cmd}
                  </button>
                ))}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    executeCommand("clear");
                  }}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-500 hover:text-slate-400 hover:border-slate-700 transition-colors ml-auto"
                >
                  clear
                </button>
              </div>

              {/* Terminal Input Line */}
              <div className="px-5 py-3.5 bg-slate-900/40 border-t border-slate-850 flex items-center gap-2 select-none">
                <span className="font-mono text-emerald-400 text-xs font-bold">guest@ayush-tiwari:~#</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command (e.g., milestones, tech-stack) or click buttons..."
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-slate-200 placeholder-slate-600 min-w-0"
                  autoFocus
                />
                <span className="text-[10px] font-mono text-slate-600 flex items-center gap-1">
                  <span>Press</span>
                  <kbd className="bg-slate-850 px-1 py-0.5 rounded border border-slate-800">Enter</kbd>
                  <CornerDownLeft className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Right: Executive Highlights Dashboard (40% width) */}
            <div className="w-full md:w-2/5 flex flex-col h-1/2 md:h-full bg-slate-50 dark:bg-slate-950 p-6 md:p-8 relative select-none">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-900 text-slate-500 hover:text-slate-750 dark:hover:text-slate-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 flex flex-col justify-between space-y-6 overflow-y-auto scrollbar-thin relative z-10 pt-2">
                
                {/* Profile Brief Card */}
                <div className="flex items-center gap-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 p-4 rounded-2xl">
                  <div className="relative flex-shrink-0">
                    <div className="bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full p-[2px] shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                      <div className="bg-white dark:bg-slate-950 rounded-full p-0.5">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden">
                          <Image
                            src="/ayush-avatar.jpg"
                            alt="Ayush Tiwari"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-slate-800 dark:text-slate-100 leading-tight">Ayush Tiwari</h2>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono font-medium mt-1">SDE-1 @ Eternal</p>
                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>Bhubaneswar, India</span>
                    </div>
                  </div>
                </div>

                {/* Core Dashboard Indicators (Bento Grid) */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 p-3.5 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                    <Trophy className="w-5 h-5 text-yellow-500 mb-2" />
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">HackerRank Rank</div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5">Global 50</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 p-3.5 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                    <Briefcase className="w-5 h-5 text-blue-500 dark:text-blue-400 mb-2" />
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">Experience</div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5">18+ Months</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 p-3.5 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                    <GraduationCap className="w-5 h-5 text-purple-550 dark:text-purple-400 mb-2" />
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">Education</div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5">IIT BBS</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 p-3.5 rounded-2xl flex flex-col justify-between shadow-sm dark:shadow-none">
                    <Sparkles className="w-5 h-5 text-emerald-500 dark:text-emerald-450 mb-2" />
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">AI Systems</div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5">Agentic</div>
                    </div>
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-900">
                  <a
                    href="https://drive.google.com/file/d/12qc4CtVxlxVphq8JWoTHOZ-cumv-MtLX/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="flex-1 h-10 border border-slate-900 dark:border-slate-800 bg-slate-900 dark:bg-slate-900/20 hover:bg-slate-800 dark:hover:bg-slate-900/40 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span className="text-emerald-400 font-mono">Copied Address!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-white" />
                          <span className="text-white">Copy Contact Mail</span>
                        </>
                      )}
                    </button>
                    <a
                      href="https://github.com/ayushtiwari110"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/20 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-xl flex items-center justify-center transition-all"
                    >
                      <GitHubIcon className="w-4 h-4 text-current" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tiwari-ayush"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/20 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-xl flex items-center justify-center transition-all"
                    >
                      <LinkedInIcon className="w-4 h-4 text-current" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Simple Typing Speed Component to animate string prints
function Typewriter({ text, speed = 2 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    if (!text) return;
    
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="whitespace-pre-wrap">{displayedText}</span>;
}