import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Repositories.css";

export default function Repositories({ repos_url }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(repos_url)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [repos_url]);

  return (
    <section className="repos-section">
      <h2 className="repos-title">Meus repositórios públicos</h2>
      <div className="repos-container">
        {repos
          .filter((repo) => repo.name != repo.owner.login)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map((repo) => {
            return (
              <a
                href={repo.html_url}
                key={repo.id}
                className="repo"
                target="blank"
              >
                <h3 className="repo_name">{repo.name}</h3>
                <p className="repo_desc">{repo.description}</p>
                <p className="repo_created_at">
                  Criado em: {new Date(repo.created_at).toLocaleDateString()}
                </p>
                <p className="repo_created_at">
                  Última alteração:{" "}
                  {new Date(repo.pushed_at).toLocaleDateString()}
                </p>
              </a>
            );
          })}
      </div>
    </section>
  );
}

Repositories.propTypes = {
  repos_url: PropTypes.string,
};
