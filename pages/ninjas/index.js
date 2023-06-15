import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjaj = ({ ninjas }) => {
  return (
    <div>
      <h2>All Ninjas</h2>
      {ninjas.map((ninja) => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`} >
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjaj;
