function User() {
  return (
    <>
      <img
        className="flex w-[80px] rounded-full md:w-[160px] ml-[43%] mt-8"
        src="../src/assets/moi.jpg"
        alt=""
      />
      <section>
        <div>
          <p className="text-center flex">
            J'ai bientôt 21ans, j'étudie à la Wild Code School de La Loupe et
            j'aimerais passer des vacances dans un pays étranger sans payer trop
            cher
          </p>
          <article className="w-[80%] ml-auto mr-auto md:w-[40%] md:h-[200px]">
            <li className="bg-gray-300 text-[1.2rem] flex justify-between mt-9 rounded-md">
              <p>Changer la Photo de Profil</p> <p>→</p>
            </li>
            <li className="bg-gray-300 text-[1.2rem] flex justify-between mt-9 rounded-md">
              <p>Changer le Mot de Passe</p> <button type="button">→</button>
            </li>
            <li className="bg-gray-300 text-[1.5rem] flex justify-between mt-9 rounded-md">
              Deconnexion
              <button type="button">
                <img
                  className="w-[40px]"
                  src="../src/assets/3351670.png"
                  alt=""
                />
              </button>
            </li>
          </article>
        </div>
      </section>
    </>
  );
}

export default User;
