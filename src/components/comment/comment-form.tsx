// "use client";

// import * as React from "react";
// import { cn } from "@/lib/utils";

// export function CommentForm() {
//   return (
//     <div className="w-full max-w-4xl mx-auto p-6">
//       {/* Main Card Container */}
//       <div className="relative rounded-[32px] bg-[#3b3b58]/40 backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-2xl overflow-hidden">
//         {/* Header */}
//         <h2 className="text-white text-lg md:text-xl font-medium mb-8">
//           댓글 작성
//         </h2>

//         {/* Input Area */}
//         <div className="relative mb-20">
//           <textarea
//             className={cn(
//               "w-full h-24 md:h-28 resize-none",
//               "bg-[#4a4a6a]/30 hover:bg-[#4a4a6a]/40 transition-colors",
//               "border border-white/10 rounded-2xl",
//               "p-5 text-white placeholder:text-white/30",
//               "focus:outline-none focus:ring-1 focus:ring-white/20",
//               "text-base md:text-lg"
//             )}
//             placeholder="따뜻한 위로와 조언을 남겨주세요"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
//           <button
//             className={cn(
//               "px-8 py-3 rounded-full",
//               "bg-gradient-to-r from-[#ff2ecd] to-[#b026ff]",
//               "text-white font-medium text-base md:text-lg",
//               "shadow-[0_0_20px_rgba(255,46,205,0.5)] hover:shadow-[0_0_30px_rgba(255,46,205,0.7)]",
//               "transform transition-all duration-200 hover:scale-105 active:scale-95",
//               "flex items-center justify-center"
//             )}
//           >
//             댓글 등록
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
