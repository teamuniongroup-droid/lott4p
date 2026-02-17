const comments = [
  { name: "Michael Johnson", avatar: "/comments/a.jpg", text: "When I saw my neighbour with a brand-new Mercedes G63 and he said it was thanks to this so-called lottery gap, I decided to try it. And now, 21 days later, I've got mine too!", time: "12 min", likes: 8 },
  { name: "David Smith", avatar: "/comments/b.jpg", text: "I thought this was just another one of those long videos full of rubbish. But Dr. showed how to use this AI in practice, and now I'm already testing it out.", time: "12 min", likes: 8 },
  { name: "Mark Stevenson", avatar: "/comments/mark.jpg", text: "Has anyone here actually tested this AI? Does it really work?", time: "15 min", likes: 15 },
  { name: "Sarah Mitchell", avatar: "/comments/sarah.jpg", text: "I watched the video and took notes on everything, but I haven't tried it out yet.", time: "8 min", likes: 3 },
  { name: "David Reynolds", avatar: "/comments/david.jpg", text: "I tried it… took me 15 days to get it right for the first time, and I won £7,000 on the EuroMillions… now I'm going after a big jackpot and I know it's just a matter of time.", time: "5 min", likes: 12 },
  { name: "Emily Moore", avatar: "/comments/ana.jpg", text: "I never imagined I'd say this, but this new AI makes winning the lottery one of the easiest things in the world.", time: "14 min", likes: 11 },
  { name: "Robert Brown", avatar: "/comments/d.jpg", text: "I thought this was just another one of those scams… But after I watched the full video, they unlocked access to the AI and I hit 5 Lotto numbers in the first week.", time: "19 min", likes: 25 },
  { name: "Arthur Bennett", avatar: "/comments/face1.webp", text: "I watched the video and wrote everything down, but I haven't tested it yet.", time: "19 min", likes: 25 },
  { name: "Matthew Taylor", avatar: "/comments/e.jpg", text: "I used to be afraid of failing as a man and not being able to provide for my family… But after I tried this lottery gap, even my grandkids now have guaranteed savings!", time: "1 h", likes: 20 },
  { name: "Avery Wilson", avatar: "/comments/pat.jpg", text: "I was sceptical at first. But after using this new AI, I won my first £195,000 prize in the EuroMillions. Thank God for showing me this.", time: "1 h", likes: 59 },
  { name: "Andrew Thompson", avatar: "/comments/g.jpg", text: "I've been trying this AI for 9 days and I already got my first £27,000 Thunderball prize! I never imagined it would work this fast!", time: "2 h", likes: 60 },
  { name: "Chloe Anderson", avatar: "/comments/cris.jpg", text: "If I died tomorrow, the only thing I'd send to all my friends would be this video showing how to use this lottery gap. It really works!", time: "3 h", likes: 14 },
  { name: "Brandon Hall", avatar: "/comments/i.jpg", text: "Dr. is a true genius!", time: "3 h", likes: 110 },
  { name: "Anthony Robinson", avatar: "/comments/j.jpg", text: "I really regretted missing out on the Bitcoin wave years ago… But this time I'm not letting it pass!! Try it out, folks! You'll thank me later!!", time: "3 h", likes: 42 },
  { name: "Samuel Turner", avatar: "/comments/l.jpg", text: "I prayed a lot for God to get me out of debt, and the next day I found this video from Dr. Thank you, Lord!!", time: "4 h", likes: 98 },
  { name: "Justin Roberts", avatar: "/comments/m.jpg", text: "I've been playing the lottery for 13 years and never won anything. But just 3 plays using this new AI and I already received my first £25,000 Lotto prize.", time: "5 h", likes: 79 },
  { name: "Colt Wilson", avatar: "/comments/colt.jpeg", text: "Before watching this video, I was buried in £30,000 of debt. But now everything has changed. Dr. completely turned my life around, and now my whole family is financially secure!", time: "6 h", likes: 79 },
  { name: "Nancy S.", avatar: "/comments/linda.jpeg", text: "It's so easy to use that even my 74-year-old neighbour tried it and won a £89,000 Set For Life prize", time: "7 h", likes: 79 },
];

const Comment = ({ name, avatar, text, time, likes }: typeof comments[0]) => (
  <div className="flex gap-2 py-2.5 md:py-3">
    <img src={avatar} alt={name} loading="lazy" decoding="async" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0" />
    <div className="flex-1 min-w-0">
      <div className="bg-[#f0f2f5] rounded-2xl px-2.5 py-1.5 md:px-3 md:py-2">
        <p className="font-semibold text-[13px] md:text-sm text-[#1877f2]">{name}</p>
        <p className="text-[13px] md:text-sm text-[#1c1e21] mt-0.5 leading-snug">{text}</p>
      </div>
      <div className="flex items-center gap-1 mt-1 px-1">
        <span className="text-xs text-[#65676b] font-semibold cursor-pointer hover:underline">like</span>
        <span className="text-xs text-[#65676b]">·</span>
        <span className="text-xs text-[#65676b] font-semibold cursor-pointer hover:underline">reply</span>
        <span className="text-xs text-[#65676b]">·</span>
        <span className="text-xs text-[#65676b]">{time}</span>
        <div className="ml-auto flex items-center gap-0.5">
          <img src="/comments/like-icon.png" alt="" loading="lazy" decoding="async" className="w-4 h-4" />
          <img src="/comments/heart-icon.png" alt="" loading="lazy" decoding="async" className="w-4 h-4" />
          <span className="text-xs text-[#65676b] ml-0.5">{likes}</span>
        </div>
      </div>
    </div>
  </div>
);

const CommentsSection = () => {
  return (
    <div className="w-full max-w-xl mx-auto px-3 py-6">
      <div className="bg-white rounded-lg shadow-sm border border-[#e4e6eb] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#e4e6eb]">
          <p className="text-sm text-[#65676b] font-medium">
            Showing 18 of 6,567 comments
          </p>
        </div>
        <div className="px-3 divide-y divide-[#e4e6eb]">
          {comments.map((comment, i) => (
            <Comment key={i} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
