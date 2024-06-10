interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps) {
  return {
    title: `Blog ${params.id} | Sucoding`,
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
