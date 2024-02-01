import { HeaderInfoCard } from "../../components/HeaderInfoCard";
import { useParams } from "react-router-dom";
import { BlogBody, BlogInfoHeader } from "./styles";

import github from "../../assets/icons/github.svg";
import calendar from "../../assets/icons/calendar.svg";
import comments from "../../assets/icons/comments.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Blog } from "../../types/user";
import Markdown from "react-markdown";
import { FetchContext } from "../../contexts/FetchContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export const Publication = () => {
  const [blogData, setBlogData] = useState({} as Blog);

  const { userData } = useContext(FetchContext);

  const { id } = useParams();

  const getBlogData = () => {
    axios
      .get(
        `https://api.github.com/repos/raphaolive/github-blog-challenge/issues/${id}`
      )
      .then((res) => {
        console.log(res);
        setBlogData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    getBlogData();
  }, [id]);


  const publishedDateRelativeToNow = () => {
    if (!blogData.created_at) {
      return "carregando...";
    }
    return formatDistanceToNow(blogData.created_at, {
      locale: ptBR,
      addSuffix: true,
    });
  };

  return (
    <>
      <HeaderInfoCard url={blogData.html_url} isPublication>
        <BlogInfoHeader>
          <h1>{blogData.title}</h1>
          <div className="footer">
            <div>
              <img src={github} alt="github-icon" />
              <span>{userData.name}</span>
            </div>
            <div>
              <img src={calendar} alt="post-time" />
              <span>{publishedDateRelativeToNow()}</span>
            </div>
            <div>
              <img src={comments} alt="comments" />
              <span>{blogData.comments} comentários</span>
            </div>
          </div>
        </BlogInfoHeader>
      </HeaderInfoCard>
      <BlogBody>
        <Markdown className="mark-down-content" >{blogData.body}</Markdown>
      </BlogBody>
    </>
  );
};
