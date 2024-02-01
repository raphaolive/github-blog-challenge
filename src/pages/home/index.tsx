import { BlogCard } from "../../components/BlogCard";
import { HeaderInfoCard } from "../../components/HeaderInfoCard";
import { BlogSection, HomeHeader, ProfileCard } from "./styles";
import github from "../../assets/icons/github.svg";
import building from "../../assets/icons/building.svg";
import folowers from "../../assets/icons/folowers.svg";
import { useContext } from "react";
import { FetchContext } from "../../contexts/FetchContext";
import { SearchForm } from "../../components/SearchForm";

export const Home = () => {
  const { userData, issuesData, loadIssuesData } = useContext(FetchContext);

  const handleSearchTerm = (query: string) => {
    loadIssuesData(query);
  };

  return (
    <>
      <HomeHeader>
        <HeaderInfoCard url={userData.html_url}>
          <ProfileCard>
            <img className="avatar" src={userData.avatar_url} alt="avatar" />
            <div className="blogerInfo">
              <h1>{userData.name}</h1>
              <p>{userData.bio}</p>

              <div className="footer">
                <div>
                  <img src={github} alt="github-icon" />
                  <span>{userData.name}</span>
                </div>
                <div>
                  <img src={building} alt="company" />
                  <span>{userData.company}</span>
                </div>
                <div>
                  <img src={folowers} alt="folowers-icon" />
                  <span>{userData.followers} seguidores</span>
                </div>
              </div>
            </div>
          </ProfileCard>
        </HeaderInfoCard>
        <SearchForm
          onWriteSearchTerm={handleSearchTerm}
          postsAmount={issuesData.length}
        />
      </HomeHeader>
      <BlogSection>
        {issuesData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.number}
            title={blog.title}
            body={blog.body}
            createdAt={blog.created_at}
          />
        ))}
      </BlogSection>
    </>
  );
};
