"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Context ---
interface ConsultModalContextValue {
  open: () => void;
}
const ConsultModalContext = createContext<ConsultModalContextValue | undefined>(undefined);

export function useConsultModal() {
  const ctx = useContext(ConsultModalContext);
  if (!ctx) throw new Error("useConsultModal must be used within ConsultModalProvider");
  return ctx;
}

// --- Provider + Modal ---
export function ConsultModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <ConsultModalContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && <ConsultForm onClose={close} />}
      </AnimatePresence>
    </ConsultModalContext.Provider>
  );
}

// --- 와이어프레임 일러스트 ---
function LandingWireframe({ active }: { active: boolean }) {
  const bg = active ? "#ec622d" : "#d1d5db";
  const fg = active ? "#fff" : "#9ca3af";
  const lineBg = active ? "rgba(255,255,255,0.3)" : "#e5e7eb";
  return (
    <svg viewBox="0 0 120 180" fill="none" className="w-full h-full">
      {/* 브라우저 프레임 */}
      <rect x="4" y="4" width="112" height="172" rx="6" fill={active ? "#fff" : "#f9fafb"} stroke={bg} strokeWidth="2" />
      {/* 상단 바 */}
      <rect x="4" y="4" width="112" height="16" rx="6" fill={bg} />
      <rect x="4" y="14" width="112" height="6" fill={bg} />
      <circle cx="14" cy="12" r="2" fill={active ? "rgba(255,255,255,0.5)" : "#fff"} />
      <circle cx="22" cy="12" r="2" fill={active ? "rgba(255,255,255,0.5)" : "#fff"} />
      <circle cx="30" cy="12" r="2" fill={active ? "rgba(255,255,255,0.5)" : "#fff"} />
      {/* 햄버거 메뉴 */}
      <rect x="98" y="10" width="10" height="1.5" rx="0.75" fill={active ? "rgba(255,255,255,0.6)" : "#d1d5db"} />
      <rect x="98" y="13" width="10" height="1.5" rx="0.75" fill={active ? "rgba(255,255,255,0.6)" : "#d1d5db"} />
      {/* 섹션 A */}
      <rect x="14" y="28" width="92" height="30" rx="3" fill={lineBg} stroke={bg} strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="60" y="47" textAnchor="middle" fill={fg} fontSize="11" fontWeight="bold">A</text>
      {/* 구분선 */}
      <line x1="20" y1="62" x2="100" y2="62" stroke={lineBg} strokeWidth="1" strokeDasharray="3 2" />
      {/* 섹션 B */}
      <rect x="14" y="68" width="92" height="30" rx="3" fill={lineBg} stroke={bg} strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="60" y="87" textAnchor="middle" fill={fg} fontSize="11" fontWeight="bold">B</text>
      {/* 구분선 */}
      <line x1="20" y1="102" x2="100" y2="102" stroke={lineBg} strokeWidth="1" strokeDasharray="3 2" />
      {/* 섹션 C */}
      <rect x="14" y="108" width="92" height="30" rx="3" fill={lineBg} stroke={bg} strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="60" y="127" textAnchor="middle" fill={fg} fontSize="11" fontWeight="bold">C</text>
      {/* 구분선 */}
      <line x1="20" y1="142" x2="100" y2="142" stroke={lineBg} strokeWidth="1" strokeDasharray="3 2" />
      {/* 섹션 D */}
      <rect x="14" y="148" width="92" height="22" rx="3" fill={lineBg} stroke={bg} strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="60" y="163" textAnchor="middle" fill={fg} fontSize="11" fontWeight="bold">D</text>
    </svg>
  );
}

function BrandWireframe({ active }: { active: boolean }) {
  const bg = active ? "#ec622d" : "#d1d5db";
  const fg = active ? "#ec622d" : "#9ca3af";
  const lineBg = active ? "rgba(236,98,45,0.15)" : "#f3f4f6";
  const stroke = active ? "#ec622d" : "#e5e7eb";

  const MiniPage = ({ x, y, label }: { x: number; y: number; label: string }) => (
    <g>
      <rect x={x} y={y} width="44" height="60" rx="3" fill={active ? "#fff" : "#f9fafb"} stroke={stroke} strokeWidth="1.5" />
      {/* 미니 상단 바 */}
      <rect x={x} y={y} width="44" height="8" rx="3" fill={lineBg} />
      <rect x={x} y={y + 5} width="44" height="3" fill={lineBg} />
      <rect x={x + 32} y={y + 2.5} width="8" height="1.5" rx="0.75" fill={bg} />
      <rect x={x + 32} y={y + 5} width="8" height="1.5" rx="0.75" fill={bg} />
      {/* 콘텐츠 영역 */}
      <rect x={x + 6} y={y + 14} width="32" height="38" rx="2" fill={lineBg} stroke={stroke} strokeWidth="0.5" strokeDasharray="2 2" />
      <text x={x + 22} y={y + 37} textAnchor="middle" fill={fg} fontSize="11" fontWeight="bold">{label}</text>
    </g>
  );

  return (
    <svg viewBox="0 0 120 140" fill="none" className="w-full h-full">
      <MiniPage x={8} y={4} label="A" />
      <MiniPage x={68} y={4} label="B" />
      <MiniPage x={8} y={72} label="C" />
      <MiniPage x={68} y={72} label="D" />
    </svg>
  );
}

// --- 희망기간 옵션 ---
const deadlineOptions = ["1주 이내", "2주 이내", "1개월 이내", "1개월 이상", "미정"];

// --- Step indicator ---
const steps = [
  { label: "유형 선택" },
  { label: "필수 정보" },
  { label: "추가 정보" },
];

// --- Form ---
function ConsultForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pageType: "" as "" | "랜딩형" | "브랜드형",
    name: "",
    phone: "",
    industry: "",
    exampleLink1: "",
    exampleLink2: "",
    exampleLink3: "",
    purpose: "",
    deadline: "",
    extra: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const canGoStep2 = formData.pageType !== "";
  const canGoStep3 = formData.name.trim() !== "" && formData.phone.trim() !== "" && formData.industry.trim() !== "";

  const goTo = (target: number) => {
    if (target === 1) setStep(1);
    if (target === 2 && canGoStep2) setStep(2);
    if (target === 3 && canGoStep2 && canGoStep3) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("무료 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl font-['Paperlogy']"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all text-xl leading-none"
        >
          ✕
        </button>

        {/* 헤더 */}
        <div className="px-8 pt-8 pb-5 border-b border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">무료 제작 신청</h3>
          <p className="text-gray-500 text-sm">간단한 정보를 입력해주시면 빠르게 연락드리겠습니다.</p>
        </div>

        {/* 스텝 인디케이터 */}
        <div className="px-8 pt-5 pb-2 flex items-center gap-0">
          {steps.map((s, i) => {
            const num = i + 1;
            const isActive = step === num;
            const isPast = step > num;
            return (
              <div key={num} className="flex items-center">
                {i > 0 && (
                  <div className={`w-6 md:w-8 h-0.5 transition-colors ${isPast || isActive ? "bg-[#ec622d]" : "bg-gray-200"}`} />
                )}
                <button
                  type="button"
                  onClick={() => goTo(num)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#ec622d] text-white shadow-md"
                      : isPast
                        ? "bg-[#ec622d]/10 text-[#ec622d]"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <span className={`w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full text-[10px] md:text-xs ${
                    isActive ? "bg-white/25" : isPast ? "bg-[#ec622d]/20" : "bg-white/50"
                  }`}>{num}</span>
                  <span className="hidden md:inline">{s.label}</span>
                </button>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="px-8 pb-8 pt-4">
          <AnimatePresence mode="wait">
            {/* ===== STEP 1: 유형 선택 ===== */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="bg-gray-50 rounded-xl p-5 md:p-6">
                  <p className="text-xs font-bold text-[#ec622d] mb-1 tracking-wider">STEP 1</p>
                  <p className="text-gray-900 font-semibold text-base md:text-lg mb-5">
                    제작하시려는<br />홈페이지의 유형을 정해주세요.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {/* 랜딩형 */}
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, pageType: "랜딩형" }))}
                      className={`relative rounded-xl p-4 md:p-5 transition-all duration-200 text-left group ${
                        formData.pageType === "랜딩형"
                          ? "bg-[#ec622d] shadow-lg shadow-[#ec622d]/25 ring-2 ring-[#ec622d]"
                          : "bg-white border-2 border-gray-200 hover:border-[#ec622d]/40 hover:shadow-md"
                      }`}
                    >
                      <span className={`text-[10px] md:text-xs font-bold tracking-wider ${
                        formData.pageType === "랜딩형" ? "text-white/70" : "text-gray-400"
                      }`}>01</span>
                      <p className={`font-bold text-sm md:text-base mt-1 mb-1 ${
                        formData.pageType === "랜딩형" ? "text-white" : "text-gray-900"
                      }`}>랜딩형 홈페이지</p>
                      <p className={`text-[10px] md:text-xs leading-relaxed mb-3 ${
                        formData.pageType === "랜딩형" ? "text-white/80" : "text-gray-500"
                      }`}>
                        한 페이지에 모든 정보를<br className="hidden md:block" /> 담는 일자 형태의 유형
                      </p>
                      <div className="w-20 md:w-24 mx-auto">
                        <LandingWireframe active={formData.pageType === "랜딩형"} />
                      </div>
                    </button>

                    {/* 브랜드형 */}
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, pageType: "브랜드형" }))}
                      className={`relative rounded-xl p-4 md:p-5 transition-all duration-200 text-left group ${
                        formData.pageType === "브랜드형"
                          ? "bg-[#ec622d] shadow-lg shadow-[#ec622d]/25 ring-2 ring-[#ec622d]"
                          : "bg-white border-2 border-gray-200 hover:border-[#ec622d]/40 hover:shadow-md"
                      }`}
                    >
                      <span className={`text-[10px] md:text-xs font-bold tracking-wider ${
                        formData.pageType === "브랜드형" ? "text-white/70" : "text-gray-400"
                      }`}>02</span>
                      <p className={`font-bold text-sm md:text-base mt-1 mb-1 ${
                        formData.pageType === "브랜드형" ? "text-white" : "text-gray-900"
                      }`}>브랜드형 홈페이지</p>
                      <p className={`text-[10px] md:text-xs leading-relaxed mb-3 ${
                        formData.pageType === "브랜드형" ? "text-white/80" : "text-gray-500"
                      }`}>
                        다양한 페이지로 구성된<br className="hidden md:block" /> 브랜드 중심의 유형
                      </p>
                      <div className="w-24 md:w-28 mx-auto">
                        <BrandWireframe active={formData.pageType === "브랜드형"} />
                      </div>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => { if (canGoStep2) setStep(2); }}
                  disabled={!canGoStep2}
                  className={`w-full rounded-xl py-3.5 font-bold text-lg tracking-wider transition-all duration-200 shadow-lg ${
                    canGoStep2
                      ? "bg-[#ec622d] text-white hover:bg-[#d55526] active:scale-[0.995] cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  다음 단계로
                </button>
              </motion.div>
            )}

            {/* ===== STEP 2: 필수 정보 ===== */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="bg-gray-50 rounded-xl p-5 md:p-6">
                  <p className="text-xs font-bold text-[#ec622d] mb-1 tracking-wider">STEP 2</p>
                  <p className="text-gray-900 font-semibold text-base md:text-lg mb-5">
                    필수 항목을 포함한<br />항목을 입력해주세요.
                  </p>
                  <div className="flex flex-col gap-4">
                    {/* 저는 [업종]의 [성함] 입니다. */}
                    <div className="flex flex-wrap items-center gap-2 text-gray-900 text-base md:text-lg font-medium">
                      <span>저는</span>
                      <input
                        required
                        autoComplete="off"
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        placeholder="업종"
                        className="w-24 md:w-32 border-b-2 border-gray-300 bg-transparent px-1 py-1 text-center text-[#ec622d] font-bold outline-none transition-colors focus:border-[#ec622d] placeholder:text-gray-300 placeholder:font-normal"
                      />
                      <span>업종의</span>
                      <input
                        required
                        autoComplete="off"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="성함"
                        className="w-20 md:w-28 border-b-2 border-gray-300 bg-transparent px-1 py-1 text-center text-[#ec622d] font-bold outline-none transition-colors focus:border-[#ec622d] placeholder:text-gray-300 placeholder:font-normal"
                      />
                      <span>입니다.</span>
                    </div>

                    {/* 전화번호는 [전화번호] 입니다. */}
                    <div className="flex flex-wrap items-center gap-2 text-gray-900 text-base md:text-lg font-medium">
                      <span>전화번호는</span>
                      <input
                        required
                        autoComplete="off"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="w-36 md:w-44 border-b-2 border-gray-300 bg-transparent px-1 py-1 text-center text-[#ec622d] font-bold outline-none transition-colors focus:border-[#ec622d] placeholder:text-gray-300 placeholder:font-normal"
                      />
                      <span>입니다.</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-shrink-0 rounded-xl border border-gray-300 px-6 py-3.5 font-bold text-gray-500 text-base transition-all duration-200 hover:bg-gray-50 active:scale-[0.995]"
                  >
                    이전
                  </button>
                  <button
                    type="button"
                    onClick={() => { if (canGoStep3) setStep(3); }}
                    disabled={!canGoStep3}
                    className={`flex-1 rounded-xl py-3.5 font-bold text-lg tracking-wider transition-all duration-200 shadow-lg ${
                      canGoStep3
                        ? "bg-[#ec622d] text-white hover:bg-[#d55526] active:scale-[0.995] cursor-pointer"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    다음 단계로
                  </button>
                </div>
                <p className="text-center text-xs text-gray-400">* 모든 필수 항목을 입력해주세요</p>
              </motion.div>
            )}

            {/* ===== STEP 3: 추가 정보 ===== */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-5"
              >
                <div className="bg-gray-50 rounded-xl p-5 md:p-6">
                  <p className="text-xs font-bold text-[#ec622d] mb-1 tracking-wider">STEP 3 <span className="text-gray-400 font-normal ml-1">선택사항</span></p>
                  <p className="text-gray-900 font-semibold text-base md:text-lg mb-5">
                    추가 정보를 입력해주세요.
                  </p>

                  <div className="flex flex-col gap-5">
                    {/* 예시 링크 */}
                    <div>
                      <p className="text-sm text-gray-700 font-semibold mb-2">원하는 페이지 예시 링크 <span className="text-gray-400 font-normal">(최대 3개)</span></p>
                      <div className="flex flex-col gap-2">
                        {[1, 2, 3].map((i) => (
                          <input
                            key={i}
                            autoComplete="off"
                            type="url"
                            name={`exampleLink${i}`}
                            value={formData[`exampleLink${i}` as keyof typeof formData]}
                            onChange={handleChange}
                            placeholder={`https://example${i}.com`}
                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 text-sm outline-none transition-colors focus:border-[#ec622d]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* 목적 */}
                    <div className="flex flex-wrap items-center gap-2 text-gray-900 text-base font-medium">
                      <span>랜딩페이지 목적은</span>
                      <input
                        autoComplete="off"
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        placeholder="판매, 홍보 등"
                        className="flex-1 min-w-[120px] border-b-2 border-gray-300 bg-transparent px-1 py-1 text-[#ec622d] font-bold outline-none transition-colors focus:border-[#ec622d] placeholder:text-gray-300 placeholder:font-normal"
                      />
                      <span>입니다.</span>
                    </div>

                    {/* 희망기간 */}
                    <div className="flex flex-wrap items-center gap-2 text-gray-900 text-base font-medium">
                      <span>제작 희망기간은</span>
                      <div className="relative">
                        <select
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleChange}
                          className="appearance-none border-b-2 border-gray-300 bg-transparent pl-2 pr-6 py-1 text-[#ec622d] font-bold outline-none transition-colors focus:border-[#ec622d] cursor-pointer"
                        >
                          <option value="" className="text-gray-400">-선택-</option>
                          {deadlineOptions.map((item) => (
                            <option key={item} value={item} className="text-gray-900">{item}</option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-0 top-1 text-gray-400 text-sm">▾</span>
                      </div>
                      <span>입니다.</span>
                    </div>

                    {/* 기타 */}
                    <div>
                      <p className="text-sm text-gray-700 font-semibold mb-2">그 외 원하는 기능</p>
                      <textarea
                        name="extra"
                        rows={3}
                        value={formData.extra}
                        onChange={handleChange}
                        placeholder="추가로 원하시는 기능이나 요청사항을 자유롭게 적어주세요."
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 text-sm outline-none transition-colors focus:border-[#ec622d] resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-shrink-0 rounded-xl border border-gray-300 px-6 py-3.5 font-bold text-gray-500 text-base transition-all duration-200 hover:bg-gray-50 active:scale-[0.995]"
                  >
                    이전
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-[#ec622d] py-3.5 text-white font-bold text-lg tracking-wider transition-all duration-200 hover:bg-[#d55526] active:scale-[0.995] shadow-lg"
                  >
                    무료 신청하기
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </motion.div>
  );
}
