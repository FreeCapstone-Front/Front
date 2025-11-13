const communityCard = () => {
  return (
    <div className="flex flex-col gap-y-4 p-5 bg-white/10 border border-white/20 w-82 h-62 rounded-3xl">
      <div className="flex items-center gap-x-4">
        <div className="w-10 h-10 rounded-full bg-pink-500"></div>
        <div className="text-white text-xl">잠못드는 밤</div>
      </div>
      <div className="text-white pb-3 border-b border-white/10">
        악몽을 너무 자주 꿔요. 특히 쫓기는 꿈을 매일 같이 꾸는데 너무 무서워서
        중간에 깨기도 해요. 악몽을 줄일 수 있는 방법이 있을까요? 심리적인
        문제일까요?
      </div>
      <div className="text-[#FB64B6]">답변하기 →</div>
    </div>
  );
};

export default communityCard;
