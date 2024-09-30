const SubscribeForm = () => {
  return (
      <div>
        <div className="container ptb-120 flex flex-column">
          <iframe
              allowFullScreen
              className="google-form-iframe"
              src={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL}>
            Cargando…
          </iframe>
        </div>
      </div>
  )
}

export default SubscribeForm