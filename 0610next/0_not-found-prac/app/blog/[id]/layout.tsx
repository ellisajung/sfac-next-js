import { Metadata } from "next";

type TProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: TProps): Promise<Metadata> => {
  const title: string = await new Promise((resolve) => {
    resolve(`Blog ${params.id} | Sucoding`);
  });
  return {
    title,
  };
};

function BlogDynamicLayout() {
  return <div>BlogDynamicLayout</div>;
}

export default BlogDynamicLayout;
