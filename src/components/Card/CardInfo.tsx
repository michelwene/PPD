interface CardProps {
  titleCard: string;
  numberCard: string;
  Icon: React.ComponentType<any>;
}

export function CardInfo({ titleCard, numberCard, Icon }: CardProps) {
  return (
    <div className="p-4 w-[17.1875rem] h-[11.3125rem] shadow-md rounded-lg border-b-8 border-blue ">
      <div className="h-full flex flex-col gap-8">
        <span className="text-gray-dark">{titleCard}</span>
        <div className="flex justify-between items-center">
          <span className="text-blue-dark font-bold text-6xl">
            {numberCard}
          </span>
          <Icon className="text-orange text-6xl" />
        </div>
      </div>
    </div>
  );
}
