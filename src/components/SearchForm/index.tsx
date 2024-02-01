import { zodResolver } from "@hookform/resolvers/zod";
import { SearchArea } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  query: z.string(),
});

type SearchFormType = z.infer<typeof schema>;

type SearchFormProps = {
  postsAmount: number;
  onWriteSearchTerm: (value: string) => void;
};

export const SearchForm = ({
  postsAmount,
  onWriteSearchTerm,
}: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(schema),
  });

  const handleSearchBlogs = (value: SearchFormType) => {
    onWriteSearchTerm(value.query);
  };

  const formatPostsAmount =
    postsAmount > 1
      ? `${postsAmount} publicações`
      : `${postsAmount} publicação`;

  return (
    <SearchArea onSubmit={handleSubmit(handleSearchBlogs)}>
      <div>
        <h2>Publicações</h2>
        <span>{formatPostsAmount}</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
      <button disabled={isSubmitting}>Buscar</button>
    </SearchArea>
  );
};
