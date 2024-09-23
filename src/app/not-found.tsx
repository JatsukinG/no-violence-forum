import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <h1>
              4<span>0</span>
              <b>4</b>!
            </h1>
            <h3>Oops! Página no encontrada</h3>
            <p>La página que estas buscando no pudo ser encontrada</p>
            <Link href="/" className="btn btn-primary">
              Regresar al inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
