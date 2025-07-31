interface OrangeProps {
  className?: string;
}

export default function Orange({ className = '' }: OrangeProps) {
  return (
    <section 
      className={`${className} w-[603px] h-[512px] bg-[#dec37a7c] blur-[318px] rounded-[603px]`}
    >
    </section>
  );
}
