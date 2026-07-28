function Hero ({goCars, goTestDrive}){
return (
<main>
      <section className="hero">
        <div className="container">
            <div className="hero-content">
          <h2>
            Знайди авто своєї мрії
          </h2>
          <p>
            Нові та вживані автомобілі за вигідними цінами
          </p>
          <div className="hero-buttons">
          <button onClick={goCars}>Переглянути авто</button>
          <button className="test-drive-btn" onClick={goTestDrive}>
            Замовити тест-драйв
          </button>
          </div>
          </div>
        </div>
      </section>
    </main>
)
}

export default Hero