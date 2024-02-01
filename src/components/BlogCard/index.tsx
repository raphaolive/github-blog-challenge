import { NavLink } from "react-router-dom";
import { CardContainer } from "./styles";
import Markdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface BlogCardProp {
  title: string;
  createdAt: string;
  body: string;
  id: number;
}

export const BlogCard = ({ title, createdAt, body, id }: BlogCardProp) => {
  const publishedDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const blogIdUrl = `/publication/${id}`;

  return (
    <CardContainer>
      <NavLink to={blogIdUrl}>
        <div className="cardHead">
          <h1>{title}</h1>
          <span>{publishedDateRelativeToNow}</span>
        </div>
        <Markdown className="mark-dwown-card">{body}</Markdown>
      </NavLink>
    </CardContainer>
  );
};
