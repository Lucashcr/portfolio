import PropTypes from "prop-types";
import "./Presentation.css";

function dateIntervalStringinify(interval) {
  let msg = "";
  const days = interval / (1000 * 60 * 60 * 24);
  const years = Math.floor(days / 365);
  if (years > 1) {
    msg += `${years} anos `;
  } else if (years === 1) {
    msg += `${years} ano `;
  }

  const months = Math.floor((days % 365) / 30);
  if (months > 1) {
    msg += `, ${months} meses `;
  } else if (years === 1) {
    msg += `, ${months} mês `;
  }

  const restDays = Math.floor((days % 365) % 30);
  if (restDays > 1) {
    msg += `e ${restDays} dias `;
  } else if (years === 1) {
    msg += `e ${restDays} dia `;
  }

  return msg;
}

export default function Presentation({
  avatar_url,
  bio,
  created_at,
  html_url,
  location,
  name,
}) {
  return (
    <a className="presentation" href={html_url} target="blank">
      <span className="left">
        <img src={avatar_url} />
      </span>
      <span className="right">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <p>{bio}</p>
        <p>
          Estou no GitHub a{" "}
          {dateIntervalStringinify(new Date() - Date.parse(created_at))}
        </p>
      </span>
    </a>
  );
}

Presentation.propTypes = {
  avatar_url: PropTypes.string,
  bio: PropTypes.string,
  created_at: PropTypes.string,
  html_url: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
};
