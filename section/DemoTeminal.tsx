import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 mb-10 shadow-[0px_0px_50px] shadow-primary/30">
      <Terminal className="bg-black/90 backdrop-blur-xl h-full w-full rounded-xl">
        <TypingAnimation>&gt; npx create-dev --stack full --features ai web3</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Initializing full-stack environment.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Found framework: Next.js + Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ AI tools detected: OpenAI SDK, LangChain.</span>
        </AnimatedSpan>

        {/* <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Web3 ready: Ethers.js, Wagmi configured.</span>
      </AnimatedSpan> */}

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Installing dependencies...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-blue-500">
          <span>ℹ Updated 3 files:</span>
          <span className="pl-2">- lib/ai.ts</span>
          <span className="pl-2">- styles/globals.css</span>
        </AnimatedSpan>

        <TypingAnimation delay={4000} className="text-muted-foreground">
          ✅ Setup complete. You are ready to build the future.
        </TypingAnimation>

        <TypingAnimation delay={4500} className="text-muted-foreground">
          Run `npm run dev` to begin your journey.
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
