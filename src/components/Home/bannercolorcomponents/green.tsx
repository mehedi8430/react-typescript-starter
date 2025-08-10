interface GreenProps {
  className?: string;
}

export default function Green({ className = '' }: GreenProps) {
  return (
    <section 
      className={`${className} w-[446px] h-[376px] bg-[#b0d8b0b2] blur-[318px] rounded-[446px]`}
    >
    </section>
  );
}
