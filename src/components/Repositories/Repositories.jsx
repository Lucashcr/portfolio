import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Repositories.css";

const MICROSECONDS_IN_A_MONTH = 1000 * 60 * 60 * 24 * 30;

export default function Repositories({ repos_url }) {
  const [repos, setRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [months, setMonths] = useState(1);

  useEffect(() => {
    fetch(repos_url)
      .then((response) => response.json())
      .then((data) => {
        setAllRepos(data);
      })
      .catch((error) => console.log(error));
  }, [repos_url]);

  useEffect(() => {
    setRepos(
      allRepos.filter(
        (repo) =>
          Date.now() - Date.parse(repo.updated_at) <
          MICROSECONDS_IN_A_MONTH * months
      )
    );
  }, [months, allRepos]);

  return (
    <section className="repos-section">
      <h2 className="repos-title">Meus repositórios públicos</h2>
      <div className="repos-filter-updated-at">
        <label htmlFor="range">Filtro por data de atualização:</label>
        <input
          type="range"
          id="range"
          min="1"
          max="12"
          step="1"
          onChange={(event) => {
            setMonths(event.target.value);
          }}
        />
        <span>
          {months == 1 ? <p>Último mês</p> : <p>Últimos {months} meses</p>}
        </span>
      </div>
      <div className="repos-container">
        {repos
          .filter((repo) => repo.name != repo.owner.login && !repo.fork)
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
