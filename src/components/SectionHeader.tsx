export type SectionHeaderProps = {
  title: string;
  description: string;
  variant: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={`box-border caret-transparent text-center ${props.variant}`}
    >
      <h2 className="text-3xl font-bold box-border caret-transparent leading-9 mb-4 md:text-4xl md:leading-10">
        {props.title}
      </h2>
      <p className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-screen-md mx-auto">
        {props.description}
      </p>
    </div>
  );
};
