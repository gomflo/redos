import { Disclosure } from "@headlessui/react";

export default function CondusefIndex() {
  return (
    <>
      <div className="bg-teal-900 p-3 grid grid-cols-3 items-center">
        <h1 className="uppercase font-bold text-gray-200 tracking-tight text-sm">
          Condusef
        </h1>
        <div className="place-self-center">
          <CondusefLogo />
        </div>
        <div className="text-white place-self-end self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <main className="mt-4">
        <div className="px-2">
          <div className="flex space-x-2 overflow-x-scroll pb-2.5 snap-x snap-mandatory">
            <img
              className="snap-start rounded-lg shadow–sm w-11/12 border border-gray-300"
              src="https://www.condusef.gob.mx/imagenes/banners/banner-carrusel-CB-ene-marzo-22.jpg"
            />
            <img
              className="snap-start rounded-lg shadow–sm w-11/12 border border-gray-300"
              src="https://www.condusef.gob.mx/imagenes/banners/SeguroAuto.jpg"
            />

            <img
              className="snap-start rounded-lg shadow–sm w-11/12 border border-gray-300"
              src="https://www.condusef.gob.mx/imagenes/banners/banner-carrusel-comportamiento-afores.jpg"
            />
            <img
              className="snap-start rounded-lg shadow–sm w-11/12 border border-gray-300"
              src="https://www.condusef.gob.mx/imagenes/banners/banner-revista-carrusel-mayol-2022.png"
            />
          </div>
        </div>

        <div className="mt-4 mx-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-700 px-4 py-2 text-left text-sm font-medium text-rose-50 hover:bg-rose-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Atención a usuarios</span>
                  <svg
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-rose-100`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pt-4 pb-2 text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-PortalQueja.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Si quieres presentar una queja hazlo desde tu casa o
                        lugar de trabajo 24 hrs. durante los 7 días de la
                        semana.
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-FINTECH.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Presenta una queja en contra de Instituciones de
                        Tecnología Financiera hazlo durante las 24 hrs. los 7
                        días de la semana.
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-CONDUSEFEnLinea.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        ¿Deseas conocer el estatus de tu queja? O ¿quieres saber
                        si eres beneficiario de una cuenta de depósito o un
                        seguro de vida?
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-SolicitudConciliacionT.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        ¿Presentaste alguna queja entre nosotros?, descubre si
                        eres candidato a una conciliación.
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-RegistrosDeDespachos.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        ¿Tienes algún problema o queja contra algún despacho de
                        cobranza? Conoce cuáles son contratados por las
                        Instituciones financieras y presenta tu queja contra
                        prácticas abusivas.
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-AgendaCita.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Atención en reclamaciones por un posible robo de
                        identidad, recoger dictamen para tu defensa, entrega de
                        documentación y apoyo a los adultos mayores para un
                        trámite de forma remota.
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-SIPRES.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Conoce las Instituciones Financieras autorizadas para
                        operar, registradas ante CONDUSEF y el estado que
                        guardan.
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/au/Img-AU-CHAT.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Conveniente para recibir asesoría u orientación sobre
                        cómo poner una queja por medios remotos, disponible en
                        nuevo horario de 9 a 18 hrs
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-700 px-4 py-2 text-left text-sm font-medium text-rose-50 hover:bg-rose-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Educación financiera</span>
                  <svg
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-rose-100`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pt-4 pb-2 text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/ef/Img-EF-EducaTuCartera.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Damos los mejores consejos para todas las edades
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/ef/Img-EF-Cursos.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Conoce los diferentes cursos gratuitos que CONDUSEF
                        tiene para ti.
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/ef/Img-EF-RevistaProteja.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Descárgala y conoce todas las secciones para ti
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/ef/Img-EF-Blog.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Información destacada y más reciente que publica
                        CONDUSEF.
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/ef/Img-EF-BuroEntidades.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Conoce qué productos financieros hay, sus
                        calificaciones, sanciones y reclamaciones.
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/ef/Img-EF-ProcesadorEstadistico.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Crear tus propios “Reportes a la Carta” con la finalidad
                        de obtener cifras de carácter oficial en materia de
                        atención a Usuarios
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-700 px-4 py-2 text-left text-sm font-medium text-rose-50 hover:bg-rose-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Instituciones financieras</span>
                  <svg
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-rose-100`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pt-4 pb-2 text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/if/Img-IF-RegistroInformacionUE.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Registra la Información de las Unidades que pueden
                        atender una reclamación por algún producto o servicio
                        contratado.
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/if/Img-IF-SIPRES.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Registra ante esta Comisión la información
                        correspondiente a tú Institución Financiera.
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/if/Img-IF-SistemaNotificaciones.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Información que deben conocer las Instituciones
                        Financieras, derivadas de los procedimientos de atención
                        a usuarios y administrativos de ésta Comisión
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/if/Img-IF-PagoMultas.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Si quieres realizar el pago hazlo desde tu casa o lugar
                        de trabajo
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/if/Img-IF-EstradosElectronicos.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Información de los actos emitidos por esta Comisión
                        Nacional
                      </div>
                    </div>

                    <div className="flex-1">
                      <img
                        src="https://www.condusef.gob.mx/imagenes/portada/if/Img-IF-RegistrosDeDespachos.jpg"
                        className="aspect-square rounded-md"
                      />
                      <div className="line-clamp-3 mt-1 px-1">
                        Regisra información de las personas físicas y morales
                        que realizan la labor de cobranza.
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-700 px-4 py-2 text-left text-sm font-medium text-rose-50 hover:bg-rose-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Rendición de cuentas</span>
                  <svg
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-rose-100`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  lorem
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mt-6 mx-4">
          <h3 className="text-gray-700 font-semibold">Contáctanos</h3>

          <div className="mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.487885967491!2d-99.17517858397969!3d19.391314886907853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff73e14fffff%3A0x944c193fdf7a7427!2sAv.%20Insurgentes%20Sur%20762%2C%20del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1658846428614!5m2!1ses-419!2smx"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="flex flex-col text-xs text-gray-700 font-medium mt-2">
              <div>Insurgentes sur 762, Col. Del Valle, C.P. 03100, CDMX</div>
              <div>asesoria@condusef.gob.mx</div>
              <div>55 53 400 999</div>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <div className="bg-amber-600 p-1.5 rounded-md">
              <svg
                fill="#ffffff"
                className="h-5 w-5"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>

            <div className="bg-amber-600 p-1.5 rounded-md">
              <svg
                fill="#ffffff"
                className="h-5 w-5"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>

            <div className="bg-amber-600 p-1.5 rounded-md">
              <svg
                fill="#ffffff"
                className="h-5 w-5"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </div>

            <div className="bg-amber-600 p-1.5 rounded-md">
              <svg
                fill="#ffffff"
                className="h-5 w-5"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function CondusefLogo() {
  return (
    <svg
      width="135"
      height="40"
      viewBox="0 0 135 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.0036 18.5323C33.9361 17.5859 33.7146 16.657 33.348 15.7829C33.3176 15.7496 33.2803 15.7235 33.2388 15.7064C33.1972 15.6893 33.1525 15.6816 33.1076 15.6839C33.0622 15.665 33.0111 15.665 32.9656 15.6839V15.7829C33.2805 16.598 33.4827 17.4528 33.5665 18.3233C33.6115 18.9447 33.5181 19.5684 33.2934 20.1489C33.2388 20.5982 33.2388 21.0524 33.2934 21.5016C33.2934 21.6886 33.195 21.7656 33.1186 21.7656C33.0421 21.7656 32.9547 21.6996 32.9437 21.4906C32.9437 20.9737 32.9437 20.5338 32.8782 20.1489C32.8838 19.5208 32.8215 18.8939 32.6924 18.2793C32.5133 17.7468 32.2227 17.2593 31.8402 16.8496C31.6237 16.5106 31.4615 16.1395 31.3594 15.7499C31.3594 15.6729 31.3594 15.5959 31.2939 15.4969C31.2283 15.398 31.2392 15.288 31.2065 15.2L31.0316 14.6501C31.0175 14.6318 30.9992 14.6173 30.9783 14.6077C30.9573 14.5981 30.9344 14.5938 30.9114 14.5951C30.8641 14.5976 30.818 14.6108 30.7764 14.6336C30.7348 14.6565 30.6988 14.6884 30.6711 14.7271C30.6511 14.784 30.6511 14.8461 30.6711 14.9031L31.1081 16.5967C31.2565 16.9134 31.4559 17.2032 31.6981 17.4545C31.8316 17.5965 31.9556 17.7472 32.0696 17.9054C32.2415 18.1303 32.3407 18.4028 32.3537 18.6862C32.4302 19.2581 32.4958 20.0719 32.5613 21.2377L32.8891 22.9203C32.9699 23.5433 32.9441 24.1757 32.8126 24.7899C32.8126 25.0429 32.8126 25.1199 32.8126 25.1419C32.8126 25.1419 32.9328 25.1419 33.1076 24.9549C33.5665 24.383 33.5447 22.4584 33.5228 20.9078C33.5587 20.4842 33.6318 20.0646 33.7414 19.654C33.8487 19.2974 33.904 18.9269 33.9053 18.5543"
        fill="#DAC6A1"
      />
      <path
        d="M32.3319 16.0028V15.7059C32.3252 15.6511 32.3065 15.5986 32.2772 15.5519C32.2426 15.4883 32.1958 15.4323 32.1395 15.387C32.0833 15.3417 32.0187 15.308 31.9494 15.288H31.8074C31.8074 15.288 31.8074 15.288 31.8074 15.354C31.8807 15.9573 32.1585 16.5167 32.5941 16.9376H32.6597C32.6597 16.9376 32.6597 16.8826 32.6597 16.7727L32.4521 16.2668C32.4083 16.1805 32.3787 16.0876 32.3646 15.9918"
        fill="#DAC6A1"
      />
      <path
        d="M30.2886 20.4899C30.2122 20.4899 30.1357 20.4019 30.1029 20.2919C29.8881 19.8304 29.7515 19.336 29.6986 18.8292C29.6986 18.6203 29.6112 18.4113 29.5457 18.2023C29.4794 17.8437 29.2946 17.5181 29.0212 17.2785C28.4154 16.7934 27.9417 16.1615 27.6445 15.4419C27.568 15.277 27.4697 15.167 27.4041 15.167C27.3385 15.167 27.3385 15.167 27.3058 15.233C27.2803 15.2881 27.2672 15.3482 27.2672 15.409C27.2672 15.4697 27.2803 15.5298 27.3058 15.5849C27.4548 15.9776 27.657 16.3477 27.9067 16.6847C27.9822 16.7803 28.0663 16.8687 28.158 16.9486H28.2126C28.5241 17.1896 28.8064 17.4664 29.054 17.7734C29.2201 18.0471 29.3211 18.3558 29.349 18.6752C29.3437 18.7448 29.3437 18.8147 29.349 18.8842C29.5072 19.7112 29.791 20.5087 30.1903 21.2487C30.2977 21.4949 30.3747 21.7535 30.4198 22.0185L30.5727 23.0193C30.5727 23.2833 30.6929 23.3492 30.7366 23.3492H30.7913C30.8411 23.2667 30.8641 23.1706 30.8568 23.0743C30.8835 22.0823 30.836 21.0897 30.7148 20.1049C30.6334 19.3001 30.3958 18.5192 30.0155 17.8064C29.939 17.7075 29.8625 17.6415 29.7751 17.6415C29.7751 17.6415 29.7751 17.7185 29.7751 17.8394C30.095 18.5932 30.2835 19.3968 30.3324 20.2149C30.3398 20.2569 30.3388 20.2999 30.3294 20.3415C30.32 20.383 30.3024 20.4223 30.2777 20.4569L30.2886 20.4899Z"
        fill="#DAC6A1"
      />
      <path
        d="M28.464 15.376C28.4535 15.3303 28.4263 15.2902 28.3879 15.2637C28.3494 15.2372 28.3025 15.2263 28.2564 15.233C28.2359 15.2232 28.2135 15.2181 28.1908 15.2181C28.1681 15.2181 28.1457 15.2232 28.1252 15.233C28.2412 15.7056 28.4918 16.1337 28.8464 16.4647H28.9338C28.9338 16.4647 28.9338 16.4097 28.9338 16.3438C28.7021 16.0145 28.542 15.6397 28.464 15.244"
        fill="#DAC6A1"
      />
      <path
        d="M31.6654 20.5778C31.6654 20.5778 31.5561 20.5778 31.4905 20.4129C31.4538 20.3449 31.4315 20.27 31.425 20.1929L31.1081 18.4663C31.013 17.9789 30.7947 17.5244 30.4744 17.1466C29.9225 16.5318 29.5022 15.8093 29.2397 15.024C29.1742 14.7821 29.0868 14.7271 29.054 14.7271C29.0212 14.7271 28.9556 14.7931 28.9447 14.9251C28.917 15.0146 28.917 15.1105 28.9447 15.2C29.131 15.9445 29.5077 16.627 30.0373 17.1796C30.3511 17.4431 30.5541 17.8163 30.6055 18.2243C30.6055 18.4333 30.6929 18.6313 30.7257 18.8402C30.8745 19.756 31.1124 20.6548 31.4359 21.5236C31.5462 21.7742 31.6127 22.0421 31.6326 22.3155C31.6326 22.9533 31.6981 23.3492 31.7418 23.6682C31.7855 23.9871 31.8511 24.0421 31.9057 24.0421C31.9604 24.0421 32.0259 23.9541 32.0587 23.7232C32.1783 22.6267 32.1783 21.5203 32.0587 20.4239C32.0314 19.8325 31.9583 19.2442 31.8402 18.6642C31.7891 18.4084 31.6807 18.1677 31.5233 17.9604C31.4141 17.8284 31.3594 17.7954 31.3376 17.7954C31.3282 17.8537 31.3282 17.9131 31.3376 17.9714C31.5218 18.6934 31.6497 19.4288 31.72 20.1709C31.7292 20.2188 31.7282 20.2681 31.7169 20.3156C31.7056 20.363 31.6843 20.4074 31.6544 20.4459L31.6654 20.5778Z"
        fill="#DAC6A1"
      />
      <path
        d="M30.5727 16.4097C30.4316 16.172 30.3215 15.9169 30.2449 15.6509L30.1685 15.222C30.1561 15.141 30.1221 15.065 30.0701 15.002C30.0372 14.9638 29.9971 14.9324 29.9521 14.9098C29.9071 14.8871 29.8581 14.8736 29.8079 14.8701C29.7798 14.859 29.7486 14.859 29.7205 14.8701C29.7117 14.889 29.7071 14.9097 29.7071 14.9306C29.7071 14.9515 29.7117 14.9721 29.7205 14.991C29.8186 15.603 30.1053 16.1685 30.5399 16.6077L30.6383 16.6627C30.6383 16.6627 30.6383 16.6627 30.6383 16.5637C30.6272 16.4964 30.601 16.4324 30.5618 16.3767"
        fill="#DAC6A1"
      />
      <path
        d="M28.7262 20.4679C28.7262 20.5778 28.8027 20.6768 28.8354 20.7868C28.8612 20.8793 28.9059 20.9655 28.9666 21.0397C28.9666 21.0397 29.054 21.1167 29.0868 21.1057C29.1195 21.0947 29.1742 21.0397 29.1851 21.0067C29.2028 20.9234 29.2028 20.8372 29.1851 20.7538C29.2596 19.6419 28.9966 18.5336 28.4312 17.5755C28.3328 17.4765 28.2891 17.4765 28.2891 17.4765C28.2891 17.4765 28.2891 17.4765 28.2891 17.5535C28.2715 17.6108 28.2715 17.6721 28.2891 17.7295C28.4154 17.9797 28.5073 18.2461 28.5623 18.5213C28.5797 18.5573 28.5887 18.5967 28.5887 18.6368C28.5887 18.6768 28.5797 18.7163 28.5623 18.7522C28.4967 18.7522 28.4312 18.6862 28.3765 18.5653C28.2157 18.104 27.8984 17.7146 27.4806 17.4655C27.0039 17.1887 26.5665 16.8484 26.1804 16.4537C26.0504 16.2855 25.937 16.1051 25.8416 15.9148C25.8416 15.9148 25.8416 15.8379 25.7542 15.8269C25.6668 15.8159 25.5903 15.9368 25.5685 16.0578C25.5466 16.1788 25.5685 16.1458 25.5685 16.2118C25.8086 16.6988 26.1895 17.1014 26.6611 17.3665C27.3301 17.6572 27.873 18.1802 28.1908 18.8402C28.4749 19.5221 28.6388 20.0499 28.748 20.3909"
        fill="#DAC6A1"
      />
      <path
        d="M26.4207 15.6729C26.3333 15.6729 26.2678 15.6729 26.2568 15.7499C26.4591 16.12 26.7574 16.4279 27.12 16.6407H27.2074C27.2074 16.6407 27.2074 16.6407 27.1528 16.5417C26.9049 16.3078 26.7045 16.0277 26.5628 15.7169C26.5431 15.6889 26.5168 15.6662 26.4863 15.6509C26.4558 15.6355 26.422 15.628 26.388 15.6289"
        fill="#DAC6A1"
      />
      <path
        d="M24.8583 17.4325C25.0293 17.4891 25.1971 17.5552 25.3609 17.6305C25.528 17.6992 25.6801 17.8 25.8089 17.9274C26.1505 18.2732 26.4613 18.6486 26.7376 19.0492C26.9561 19.3571 27.1856 19.665 27.4478 19.973C27.4648 19.9943 27.4864 20.0114 27.5111 20.0228C27.5357 20.0343 27.5627 20.0398 27.5898 20.039C27.618 20.05 27.6492 20.05 27.6773 20.039C27.6884 20.0129 27.6941 19.9848 27.6941 19.9565C27.6941 19.9281 27.6884 19.9 27.6773 19.874C27.487 19.233 27.2307 18.6137 26.9124 18.0264C26.8765 17.9702 26.8259 17.925 26.7661 17.8959C26.7064 17.8668 26.6398 17.8549 26.5737 17.8614L26.7485 18.1914V18.2683C26.7347 18.2744 26.7199 18.2775 26.7048 18.2775C26.6898 18.2775 26.6749 18.2744 26.6611 18.2683H26.5846C26.4447 18.0613 26.2835 17.8697 26.1039 17.6965C26.0247 17.6182 25.9321 17.5549 25.8307 17.5095L25.197 17.2566C25.0322 17.1756 24.875 17.0799 24.7272 16.9706C24.5742 16.8386 24.4103 16.6957 24.2355 16.5197H24.1262C24.1143 16.5139 24.1012 16.5108 24.088 16.5108C24.0747 16.5108 24.0616 16.5139 24.0497 16.5197C24.0315 16.5554 24.022 16.595 24.022 16.6352C24.022 16.6753 24.0315 16.7149 24.0497 16.7507C24.1675 16.9535 24.3373 17.1206 24.5414 17.2346C24.6347 17.2892 24.7336 17.3335 24.8364 17.3665"
        fill="#DAC6A1"
      />
      <path
        d="M31.1737 24.317C30.7148 24.0311 30.3979 23.8221 30.1357 23.6352C28.3656 22.2825 26.5628 20.9738 24.6725 19.643C24.6373 19.6295 24.5984 19.6295 24.5633 19.643C24.5565 19.7108 24.5694 19.7791 24.6005 19.8396C24.6315 19.9001 24.6793 19.9503 24.7381 19.984L30.4744 24.2181H30.54C30.6268 24.2516 30.6999 24.3136 30.7475 24.394C30.7475 24.394 30.8131 24.548 30.6492 24.669C30.4782 24.7626 30.2866 24.8117 30.092 24.8119C29.7311 24.8053 29.3836 24.6732 29.1086 24.438C27.5789 23.2283 26.0602 21.9965 24.6507 20.8528C24.6152 20.841 24.5769 20.841 24.5414 20.8528C24.5257 20.8873 24.5176 20.9248 24.5176 20.9628C24.5176 21.0007 24.5257 21.0382 24.5414 21.0727C24.5691 21.157 24.6226 21.2301 24.6944 21.2817C26.1804 22.4914 27.6663 23.7122 29.0649 24.9109C29.3583 25.0884 29.6951 25.1798 30.0373 25.1748C30.4848 25.149 30.9112 24.975 31.2502 24.68C31.2711 24.6529 31.2864 24.6217 31.295 24.5885C31.3036 24.5553 31.3054 24.5206 31.3003 24.4867C31.2952 24.4527 31.2833 24.4202 31.2653 24.391C31.2473 24.3618 31.2235 24.3367 31.1955 24.317"
        fill="#DAC6A1"
      />
      <path
        d="M29.0321 24.0201C29.2376 24.1759 29.4571 24.3122 29.6877 24.427H29.8844C29.8844 24.427 29.8844 24.35 29.8079 24.284L24.6835 20.2919H24.607C24.6068 20.3486 24.6207 20.4044 24.6475 20.4544C24.6742 20.5043 24.7128 20.5467 24.7599 20.5778L29.0321 24.0201Z"
        fill="#DAC6A1"
      />
      <path
        d="M27.8302 24.251L24.4977 21.4357C24.4656 21.4262 24.4315 21.4262 24.3994 21.4357C24.3994 21.4357 24.3994 21.5346 24.4977 21.6336C25.4592 22.5244 26.5191 23.4482 27.6117 24.383C27.748 24.513 27.8983 24.6274 28.0597 24.7239C28.114 24.762 28.1792 24.7813 28.2454 24.7789C28.311 24.7789 28.3547 24.7789 28.3656 24.7129C28.3765 24.647 28.3656 24.7129 28.3656 24.658L27.8302 24.251Z"
        fill="#DAC6A1"
      />
      <path
        d="M25.2188 16.9266H25.3281C25.3318 16.9048 25.3318 16.8825 25.3281 16.8606C25.2942 16.7794 25.2461 16.7049 25.1861 16.6407C25.1173 16.5629 25.0311 16.5026 24.9348 16.4647H24.749C24.749 16.4647 24.6944 16.4647 24.6835 16.4647V16.5307C24.8317 16.7025 25.0141 16.8411 25.2188 16.9376"
        fill="#DAC6A1"
      />
      <path
        d="M28.4093 25.4828C28.5844 25.4791 28.7548 25.4258 28.901 25.3288C28.901 25.3288 28.9666 25.2628 28.9556 25.2298C28.9447 25.1968 28.9556 25.1638 28.8682 25.1419H28.4202C28.1382 25.1495 27.8641 25.0471 27.6554 24.8559C26.8359 24.1631 26.2022 23.5692 25.634 23.0523C25.2079 22.6564 24.8036 22.2825 24.3666 21.9525C24.3666 21.9525 24.312 21.9525 24.2901 21.9525C24.2792 21.9884 24.2792 22.0267 24.2901 22.0625C24.3143 22.1092 24.3478 22.1504 24.3884 22.1835L24.5851 22.3924C25.5903 23.3382 26.4972 24.1961 27.426 25.0319C27.6157 25.2341 27.8419 25.3983 28.0925 25.5158C28.2285 25.5488 28.3677 25.5673 28.5077 25.5708"
        fill="#DAC6A1"
      />
      <path
        d="M23.8968 22.2275C24.6288 23.0303 25.4046 23.8221 26.2678 24.647C26.4246 24.8215 26.6303 24.9442 26.8578 24.9989C26.8434 24.9676 26.8207 24.941 26.7922 24.9219C26.0274 24.273 25.2188 23.4592 24.5305 22.7224C24.4804 22.6775 24.433 22.6298 24.3884 22.5794V22.5244C24.2562 22.3715 24.1099 22.2316 23.9514 22.1065H23.8749C23.868 22.1221 23.8644 22.1389 23.8644 22.156C23.8644 22.1731 23.868 22.1899 23.8749 22.2055"
        fill="#DAC6A1"
      />
      <path
        d="M27.2074 25.6477C27.2725 25.6592 27.339 25.6592 27.4041 25.6477C27.4112 25.6382 27.415 25.6266 27.415 25.6147C27.415 25.6029 27.4112 25.5913 27.4041 25.5818C27.3944 25.5489 27.3741 25.5202 27.3464 25.5003C27.3187 25.4804 27.2852 25.4704 27.2511 25.4718C26.9014 25.4586 26.5664 25.3268 26.3005 25.0979C25.4155 24.284 24.5414 23.4262 23.711 22.5574C23.7021 22.5417 23.6894 22.5285 23.6742 22.5189C23.6589 22.5093 23.6415 22.5036 23.6236 22.5024C23.5983 22.5848 23.5983 22.673 23.6236 22.7554C23.6586 22.8105 23.6989 22.862 23.7438 22.9093C24.2245 23.4152 24.8364 24.0641 25.6996 24.8779C25.9249 25.1269 26.191 25.3352 26.4863 25.4938C26.6797 25.5933 26.8921 25.6495 27.1091 25.6587"
        fill="#DAC6A1"
      />
      <path
        d="M25.9509 25.3398C25.9445 25.2984 25.9251 25.2601 25.8957 25.2304C25.8662 25.2008 25.8282 25.1813 25.787 25.1748C25.3827 25.1089 24.8473 24.504 24.2901 23.8661L24.0497 23.4482H23.9951V23.5032C23.9874 23.5186 23.9834 23.5355 23.9834 23.5527C23.9834 23.5699 23.9874 23.5868 23.9951 23.6022L25.1751 24.9769C25.2773 25.0908 25.402 25.182 25.5413 25.2445C25.6805 25.307 25.8312 25.3394 25.9837 25.3398H25.9509Z"
        fill="#DAC6A1"
      />
      <path
        d="M11.0911 10.702C11.1453 10.6916 11.2009 10.6916 11.255 10.702C11.3126 10.6895 11.3722 10.6895 11.4298 10.702C11.4657 10.7113 11.5033 10.7113 11.5391 10.702C11.5822 10.7127 11.6272 10.7127 11.6702 10.702C11.7878 10.5531 11.9372 10.4328 12.1073 10.35C12.1834 10.3394 12.2606 10.3394 12.3367 10.35C12.5085 10.3539 12.674 10.4159 12.8066 10.526C12.8319 10.5491 12.8504 10.5788 12.86 10.6118C12.8696 10.6447 12.87 10.6798 12.8612 10.713C12.8612 10.768 12.7847 10.8009 12.6864 10.8119H12.5334C12.3747 10.8145 12.2169 10.8366 12.0636 10.8779C11.8713 10.9179 11.7012 11.0298 11.5877 11.1911C11.4741 11.3523 11.4255 11.5509 11.4517 11.7467C11.4517 11.8237 11.4517 12.0327 11.2878 12.0327C11.2081 12.0212 11.1348 11.9823 11.0802 11.9227C10.9922 11.8455 10.9207 11.7511 10.87 11.6452C10.8193 11.5394 10.7904 11.4242 10.7852 11.3068C10.7979 11.1955 10.8336 11.0881 10.8901 10.9915C10.9466 10.8949 11.0225 10.8112 11.113 10.746L11.0911 10.702ZM10.5885 11.1199C10.5335 11.2074 10.499 11.3063 10.4877 11.4092C10.4763 11.5121 10.4884 11.6162 10.523 11.7138C10.6171 11.9701 10.7893 12.19 11.0149 12.342C11.2406 12.4941 11.5081 12.5706 11.7795 12.5606C11.9325 12.5606 12.0417 12.5606 12.0636 12.4506C12.0854 12.3406 12.0636 12.3186 11.9871 12.2856C11.8593 12.1979 11.7614 12.0728 11.7067 11.9272C11.652 11.7817 11.6431 11.6227 11.6812 11.4718C11.7496 11.3192 11.8626 11.1912 12.005 11.1047C12.1475 11.0183 12.3127 10.9775 12.4788 10.9879C12.5585 10.9769 12.6394 10.9769 12.7192 10.9879C12.885 10.9897 13.048 10.9439 13.189 10.8559C13.3631 10.6781 13.5969 10.5722 13.8446 10.559C13.9492 10.5567 14.0532 10.5754 14.1505 10.614C14.1755 10.6335 14.1957 10.6585 14.2096 10.6871C14.2235 10.7157 14.2307 10.7471 14.2307 10.779C14.2307 10.8108 14.2235 10.8422 14.2096 10.8708C14.1957 10.8994 14.1755 10.9244 14.1505 10.9439C14.0799 11.0219 13.9819 11.0692 13.8773 11.0759C13.6875 11.1183 13.5088 11.2008 13.3529 11.3178C13.3476 11.3432 13.3476 11.3694 13.3529 11.3948C13.3529 11.3948 13.3529 11.3948 13.4949 11.3948H13.8664C14.2284 11.2349 14.5638 11.0198 14.8607 10.757C14.959 10.669 14.97 10.603 14.8607 10.482C14.6285 10.2481 14.3151 10.114 13.9866 10.1081C13.8703 10.0983 13.7533 10.0983 13.637 10.1081C13.4799 10.1494 13.3185 10.1716 13.1562 10.1741C13.0444 10.1969 12.9293 10.1969 12.8175 10.1741L12.1182 9.96513C12.0174 9.92419 11.91 9.90184 11.8013 9.89914C11.6998 9.89997 11.6023 9.93923 11.5282 10.0091L11.6047 10.0641C11.6702 10.1301 11.6921 10.1851 11.6702 10.2401C11.6484 10.2951 11.55 10.339 11.4626 10.35H11.2987C11.2606 10.3469 11.2223 10.3521 11.1865 10.3654C11.1506 10.3787 11.1181 10.3997 11.0911 10.427C10.906 10.6003 10.7476 10.8005 10.6213 11.0209"
        fill="#DAC6A1"
      />
      <path
        d="M11.8123 9.52522C11.9666 9.6131 12.132 9.67968 12.304 9.72318H12.3586C12.385 9.72194 12.4107 9.71429 12.4335 9.70089C12.4564 9.68748 12.4756 9.66872 12.4897 9.6462C12.5805 9.51897 12.6404 9.37206 12.6645 9.21729C12.711 8.99726 12.8125 8.79284 12.9595 8.62342L13.036 8.54644C13.1288 8.44681 13.1963 8.32607 13.2327 8.19451C13.2755 8.08513 13.2815 7.96467 13.25 7.8515C13.2184 7.73833 13.1509 7.63864 13.0579 7.56765V7.68862C13.0306 7.89598 12.9588 8.09489 12.8475 8.27151C12.7362 8.44814 12.588 8.59824 12.4132 8.7114L12.2602 8.81038C12.1232 8.90443 11.9951 9.01121 11.8778 9.12931C11.8339 9.16202 11.7968 9.20315 11.7686 9.25033C11.7405 9.29751 11.7219 9.34982 11.7139 9.40425C11.7194 9.42938 11.7301 9.4531 11.7451 9.47392C11.7601 9.49474 11.7793 9.5122 11.8013 9.52522"
        fill="#DAC6A1"
      />
      <path
        d="M13.036 8.87636C12.9814 8.87636 12.9486 8.87636 12.9705 8.94235C13.2108 9.36026 13.1016 9.51423 12.7519 9.67919C12.6208 9.67919 12.6864 9.84415 12.8066 9.82216C12.8239 9.82942 12.8424 9.83316 12.8612 9.83316C12.8799 9.83316 12.8985 9.82942 12.9158 9.82216C12.9951 9.80053 13.0682 9.76048 13.1293 9.70521C13.1903 9.64995 13.2376 9.58103 13.2674 9.50399C13.2972 9.42695 13.3086 9.34396 13.3006 9.26169C13.2927 9.17942 13.2657 9.10017 13.2218 9.03033C13.1671 8.92035 13.0797 8.88736 13.036 8.89836"
        fill="#DAC6A1"
      />
      <path
        d="M13.5605 8.05154C13.626 8.05154 13.6588 7.94157 13.6807 7.85358C13.7025 7.7656 13.6807 7.52366 13.8227 7.50166C13.9648 7.47967 13.8992 7.65563 13.9429 7.67762C13.9866 7.69962 14.0194 7.67762 14.0412 7.60064C14.0465 7.49326 14.0276 7.38607 13.986 7.28706C13.9443 7.18805 13.8811 7.09976 13.8009 7.02876C13.8009 7.02876 13.8009 7.02876 13.8009 7.09475C13.6971 7.38126 13.6345 7.68123 13.6151 7.98556C13.6151 8.05154 13.6151 8.07354 13.6151 8.07354"
        fill="#DAC6A1"
      />
      <path
        d="M13.5277 8.67841C14.4783 8.2385 14.675 7.66663 14.7077 7.36969C14.733 7.23565 14.7254 7.09742 14.6854 6.96707C14.6454 6.83671 14.5743 6.71819 14.4783 6.62185C14.5405 6.83389 14.5501 7.05805 14.5063 7.2747C14.4625 7.49135 14.3666 7.69388 14.227 7.86458C14.0194 8.04054 13.779 8.2275 13.5277 8.41446L13.4184 8.49145C13.4184 8.49145 13.3638 8.55743 13.4184 8.59043C13.428 8.62035 13.4471 8.64626 13.4728 8.66415C13.4985 8.68204 13.5293 8.69092 13.5605 8.6894"
        fill="#DAC6A1"
      />
      <path
        d="M14.7187 8.7224C14.497 8.90098 14.2503 9.04552 13.9866 9.1513C13.8441 9.20381 13.7165 9.29065 13.6151 9.40425C13.6096 9.42589 13.6096 9.4486 13.6151 9.47024H13.626C14.1102 9.29843 14.564 9.04966 14.97 8.73339C15.2431 8.50244 15.3305 8.27149 15.2103 8.04054C15.2103 8.04054 15.1557 8.04054 15.1339 8.04054C15.102 8.02965 15.0674 8.02965 15.0355 8.04054C14.8061 8.2605 13.8664 8.75539 13.6916 8.88736C13.5168 9.01933 13.6151 8.97534 13.6151 8.98634C13.6202 8.99317 13.6268 8.99871 13.6344 9.00253C13.642 9.00635 13.6503 9.00834 13.6588 9.00834C13.6673 9.00834 13.6757 9.00635 13.6832 9.00253C13.6908 8.99871 13.6974 8.99317 13.7025 8.98634C13.8446 8.98634 14.4674 8.55743 14.6203 8.48045C14.7733 8.40347 14.8607 8.41446 14.8716 8.48045C14.8826 8.54644 14.817 8.62342 14.7077 8.7004"
        fill="#DAC6A1"
      />
      <path
        d="M13.3966 10.0201C13.5017 10.0095 13.6048 9.98355 13.7025 9.94313C14.1206 9.71409 14.5597 9.52625 15.0137 9.38225C15.0683 9.38225 15.1339 9.38225 15.1557 9.38225C15.1828 9.39896 15.2052 9.4224 15.2208 9.45032C15.2363 9.47824 15.2445 9.50971 15.2445 9.54172C15.2445 9.57373 15.2363 9.6052 15.2208 9.63312C15.2052 9.66104 15.1828 9.68448 15.1557 9.70118L14.5875 9.95413C14.5875 9.95413 14.5875 9.95413 14.7733 9.95413C15.3415 9.82216 15.56 9.60221 15.4835 9.27228C15.4593 9.21752 15.4192 9.17141 15.3685 9.14C15.3178 9.1086 15.2589 9.09337 15.1994 9.09632C15.0352 9.07683 14.8688 9.10347 14.7187 9.1733C14.4346 9.29427 14.0194 9.52522 13.7571 9.6242C13.6427 9.66805 13.5329 9.72331 13.4294 9.78917C13.4294 9.78917 13.1999 9.97613 13.4294 9.94313"
        fill="#DAC6A1"
      />
      <path
        d="M15.1666 7.47966C15.3305 7.34769 15.4835 6.96278 15.5928 7.16073C15.6178 7.26004 15.621 7.36365 15.6021 7.46432C15.5832 7.565 15.5428 7.66031 15.4835 7.74361C15.4179 7.85359 15.4835 7.90857 15.56 7.95256C15.56 7.95256 15.56 7.95256 15.6146 7.95256C15.7783 7.69499 15.837 7.38379 15.7785 7.08375C15.7569 6.91168 15.6709 6.75437 15.5381 6.64385H15.4617C15.4422 6.64491 15.4236 6.65175 15.408 6.6635C15.3924 6.67524 15.3807 6.69137 15.3742 6.70983L15.2868 7.03976C15.2551 7.15878 15.1951 7.26824 15.112 7.35869C15.0384 7.41885 14.9913 7.50577 14.9809 7.60064C14.9809 7.68862 14.9809 7.60064 15.1339 7.60064"
        fill="#DAC6A1"
      />
      <path
        d="M16.0407 7.90857C16.3294 7.9853 16.6054 8.10385 16.8602 8.2605C16.915 8.29631 16.9737 8.32582 17.035 8.34848C17.2602 8.48108 17.4938 8.59864 17.7343 8.7004H17.8108C17.8108 8.7004 17.8764 8.7004 17.9091 8.63442C18.0944 8.44568 18.2167 8.20349 18.2588 7.94157C18.1722 7.95821 18.0832 7.95821 17.9966 7.94157C17.892 7.9626 17.7843 7.9626 17.6797 7.94157C17.2397 7.67827 16.7471 7.51674 16.2374 7.46867H16.1719V7.52366C16.7102 7.63156 17.2247 7.83647 17.6906 8.12852C17.6906 8.12852 17.8217 8.20551 17.8217 8.2605C17.8011 8.26958 17.7787 8.27427 17.7562 8.27427C17.7336 8.27427 17.7113 8.26958 17.6906 8.2605H17.5486C17.0847 8.02923 16.6022 7.83792 16.1063 7.68862C16.0944 7.68279 16.0813 7.67975 16.0681 7.67975C16.0548 7.67975 16.0417 7.68279 16.0298 7.68862C16.0367 7.72996 16.0557 7.76828 16.0845 7.7986"
        fill="#DAC6A1"
      />
      <path
        d="M15.4507 10.548C15.3852 10.548 15.2759 10.372 15.2213 10.2511H15.1666C15.1549 10.283 15.1549 10.3181 15.1666 10.35C15.2007 10.5229 15.2934 10.6784 15.4289 10.7899C15.4758 10.7994 15.524 10.7994 15.5709 10.7899C15.6291 10.784 15.6838 10.7594 15.7271 10.7198C15.7704 10.6803 15.7999 10.6277 15.8113 10.57C15.8135 10.4614 15.7898 10.3538 15.7423 10.2562C15.6948 10.1587 15.6248 10.0739 15.5381 10.0091C15.5987 10.1364 15.6322 10.275 15.6365 10.416C15.6365 10.493 15.56 10.482 15.5272 10.482"
        fill="#DAC6A1"
      />
      <path
        d="M16.2156 10.1521C16.0845 10.1521 15.9096 9.83316 15.855 9.73418H15.7894C15.7854 9.7744 15.7854 9.81493 15.7894 9.85515C15.8268 10.0751 15.9297 10.2784 16.0845 10.438C16.1099 10.4597 16.1396 10.4757 16.1716 10.4852C16.2036 10.4946 16.2371 10.4973 16.2702 10.493C16.3665 10.4761 16.4586 10.4401 16.5411 10.3873C16.6236 10.3344 16.6949 10.2657 16.751 10.1851C16.7867 10.1334 16.8058 10.072 16.8058 10.0091C16.8058 9.9462 16.7867 9.88479 16.751 9.83316C16.4733 9.5327 16.1288 9.30279 15.7457 9.1623C15.852 9.25531 15.9652 9.33988 16.0845 9.41525C16.2446 9.50835 16.3886 9.62723 16.5106 9.76717C16.5263 9.80168 16.5344 9.83919 16.5344 9.87715C16.5344 9.91511 16.5263 9.95262 16.5106 9.98712C16.4864 10.0308 16.4536 10.0689 16.4141 10.0992C16.3746 10.1295 16.3293 10.1512 16.2811 10.1631"
        fill="#DAC6A1"
      />
      <path
        d="M15.5928 8.74439C16.0473 9.07258 16.5343 9.35267 17.046 9.58021C17.1036 9.61075 17.1668 9.62944 17.2317 9.6352C17.2652 9.63303 17.2979 9.62413 17.328 9.60902C17.358 9.59391 17.3847 9.57289 17.4065 9.54722C17.4793 9.48546 17.5288 9.40041 17.5467 9.30631C17.5646 9.21221 17.5498 9.11478 17.5049 9.03033C17.0482 8.55641 16.4563 8.23737 15.8113 8.11753C15.8202 8.13323 15.8329 8.14646 15.8482 8.15605C15.8634 8.16564 15.8808 8.1713 15.8987 8.17252C16.3214 8.32228 16.7164 8.54154 17.0678 8.82138C17.1443 8.88736 17.2317 8.95335 17.1989 9.06332C17.1766 9.1294 17.1346 9.18698 17.0787 9.22829H17.0132C16.865 9.20264 16.7236 9.14648 16.598 9.06332H16.5215C16.2415 8.90256 15.9447 8.77347 15.6365 8.67841L15.5928 8.74439Z"
        fill="#DAC6A1"
      />
      <path
        d="M27.71 7.7876C27.71 7.7876 27.71 7.87558 27.7974 7.94157C29.9712 9.61694 31.6672 11.84 32.7143 14.3862C32.7328 14.4257 32.7424 14.4689 32.7424 14.5126C32.7424 14.5564 32.7328 14.5996 32.7143 14.6391C32.6795 14.6742 32.6324 14.694 32.5832 14.6941C32.4459 14.6722 32.3152 14.6196 32.2007 14.5401C31.7432 14.2272 31.3469 13.832 31.0316 13.3744C29.8146 11.4596 28.2549 9.78891 26.4317 8.44746C26.3959 8.43764 26.3582 8.43764 26.3224 8.44746C26.3148 8.50483 26.3219 8.56321 26.3429 8.61708C26.3639 8.67095 26.3982 8.71855 26.4426 8.75539C28.3091 10.2309 29.8905 12.0388 31.1081 14.0892C31.372 14.4816 31.7317 14.7989 32.1527 15.0108C32.5737 15.2227 33.0418 15.3219 33.5119 15.299H33.8069C33.9708 15.299 33.9927 15.211 33.9927 15.211C33.9927 15.211 33.9927 15.156 33.9053 15.101C33.4669 14.7737 33.142 14.3158 32.9765 13.7923C31.8624 11.3949 30.1448 9.33243 27.9941 7.80959C27.944 7.79606 27.8913 7.79606 27.8412 7.80959C27.8412 7.80959 27.7756 7.80959 27.7647 7.80959"
        fill="#DAC6A1"
      />
      <path
        d="M31.862 14.0343C31.9248 14.0948 32.0052 14.1333 32.0915 14.1442C32.1015 14.15 32.1128 14.1531 32.1243 14.1531C32.1358 14.1531 32.1471 14.15 32.157 14.1442C32.1697 14.0859 32.1704 14.0256 32.1591 13.967C32.1478 13.9084 32.1248 13.8527 32.0915 13.8033C30.8905 11.5995 29.2186 9.69142 27.1965 8.21651C27.1245 8.20106 27.05 8.20106 26.978 8.21651C26.9354 8.20225 26.8894 8.20225 26.8469 8.21651C26.8469 8.21651 26.8469 8.28249 27.0108 8.37047C28.96 9.95949 30.6041 11.8939 31.862 14.0782"
        fill="#DAC6A1"
      />
      <path
        d="M29.8516 14.0233C29.7848 14.0113 29.7213 13.9856 29.6649 13.9478C29.6084 13.9099 29.5604 13.8607 29.5238 13.8033C28.5849 12.4778 27.4836 11.2769 26.2459 10.2291C26.2167 10.2968 26.2017 10.3697 26.2017 10.4435C26.2017 10.5173 26.2167 10.5903 26.2459 10.658C27.0571 11.3775 27.8064 12.1648 28.4858 13.0115C28.8641 13.4817 29.2729 13.9262 29.7096 14.3422C29.8483 14.4261 30.0066 14.4717 30.1685 14.4742C30.2345 14.4768 30.3003 14.4643 30.3609 14.4376C30.4214 14.4109 30.4752 14.3708 30.5181 14.3202C30.5426 14.2667 30.5553 14.2086 30.5553 14.1497C30.5553 14.0909 30.5426 14.0327 30.5181 13.9793C29.512 12.1253 28.095 10.5297 26.377 9.31627C26.377 9.31627 26.3115 9.31627 26.2896 9.31627C26.2795 9.39224 26.2871 9.46954 26.3118 9.54206C26.3364 9.61458 26.3774 9.68035 26.4317 9.73418C27.7648 10.8877 28.9471 12.2069 29.9499 13.6603C29.9722 13.7066 29.9837 13.7574 29.9837 13.8088C29.9837 13.8602 29.9722 13.911 29.9499 13.9573C29.9353 13.9784 29.9156 13.9956 29.8927 14.0071C29.8698 14.0186 29.8444 14.0242 29.8188 14.0233"
        fill="#DAC6A1"
      />
      <path
        d="M25.9181 11.0649C25.899 11.1023 25.889 11.1438 25.889 11.1859C25.889 11.228 25.899 11.2694 25.9181 11.3068C26.7887 12.0746 27.5795 12.9295 28.2782 13.8583C28.3257 13.9066 28.3566 13.969 28.3665 14.0362C28.3763 14.1035 28.3645 14.1722 28.3328 14.2322C28.3056 14.2866 28.266 14.3337 28.2172 14.3696C28.1683 14.4056 28.1117 14.4293 28.052 14.439C27.9923 14.4487 27.9312 14.4439 27.8736 14.4252C27.8161 14.4064 27.7637 14.3742 27.721 14.3312C27.1746 13.8583 26.6283 13.3194 26.1694 12.8025C25.9618 12.5716 25.7324 12.3296 25.5248 12.1207H25.4701C25.4482 12.1611 25.4366 12.2065 25.4366 12.2526C25.4366 12.2988 25.4482 12.3441 25.4701 12.3846L27.0654 14.1112C27.2819 14.3641 27.5503 14.5667 27.8521 14.7051H28.2126C28.3043 14.7138 28.3968 14.7004 28.4823 14.666C28.5678 14.6316 28.6439 14.5771 28.7043 14.5071C28.7495 14.4167 28.773 14.3169 28.773 14.2157C28.773 14.1145 28.7495 14.0147 28.7043 13.9243C27.9992 12.7736 27.07 11.7785 25.9728 10.9989L25.9181 11.0649Z"
        fill="#DAC6A1"
      />
      <path
        d="M25.5029 11.4828C25.4902 11.5104 25.4836 11.5404 25.4836 11.5708C25.4836 11.6012 25.4902 11.6312 25.5029 11.6588C26.2071 12.4383 26.9588 13.1729 27.7537 13.8583H27.8084C27.8084 13.8583 27.8084 13.8033 27.8084 13.7593C27.1337 12.9005 26.3639 12.122 25.5138 11.4388L25.5029 11.4828Z"
        fill="#DAC6A1"
      />
      <path
        d="M25.2625 12.7585C25.2268 12.7487 25.1891 12.7487 25.1533 12.7585C25.1326 12.7601 25.1127 12.767 25.0955 12.7785C25.0783 12.7901 25.0643 12.8059 25.0549 12.8245C25.0482 12.8561 25.0496 12.8889 25.0592 12.9197C25.0688 12.9506 25.0861 12.9784 25.1096 13.0005C25.6332 13.4193 26.0902 13.9162 26.4644 14.4742C26.4987 14.5263 26.517 14.5875 26.517 14.6501C26.517 14.7127 26.4987 14.7739 26.4644 14.8261C26.4304 14.8789 26.3833 14.9218 26.3277 14.9508C26.2721 14.9797 26.2101 14.9936 26.1476 14.991C26.04 14.9874 25.9349 14.9572 25.8416 14.9031C25.3715 14.5829 24.9358 14.2143 24.5414 13.8033L24.454 13.7153C24.454 13.7153 24.454 13.7153 24.3884 13.7813C24.3702 13.8131 24.3606 13.8491 24.3606 13.8858C24.3606 13.9225 24.3702 13.9585 24.3884 13.9903C24.7881 14.5154 25.2763 14.9658 25.8307 15.321C26.0028 15.3613 26.1785 15.3834 26.3552 15.387C26.4373 15.3946 26.5201 15.3837 26.5976 15.3552C26.6751 15.3266 26.7453 15.2812 26.8032 15.222C26.8494 15.1202 26.8733 15.0095 26.8733 14.8976C26.8733 14.7856 26.8494 14.675 26.8032 14.5731C26.3686 13.9076 25.8342 13.314 25.2188 12.8135"
        fill="#DAC6A1"
      />
      <path
        d="M24.6725 13.3634L25.9728 14.6501H26.1366C25.7355 14.0598 25.2187 13.5583 24.6179 13.1764C24.6047 13.2233 24.6028 13.2727 24.6123 13.3205C24.6218 13.3683 24.6425 13.4132 24.6725 13.4514"
        fill="#DAC6A1"
      />
      <path
        d="M24.5523 16.1018C24.6811 16.0976 24.8071 16.0636 24.9208 16.0026C25.0345 15.9416 25.1327 15.8551 25.2079 15.7499C25.2462 15.681 25.2663 15.6034 25.2663 15.5244C25.2663 15.4455 25.2462 15.3679 25.2079 15.299C24.8965 14.8537 24.5293 14.4508 24.1153 14.1002C24.1153 14.1002 24.0607 14.1002 24.0388 14.1552C24.0283 14.1736 24.0227 14.1945 24.0227 14.2157C24.0227 14.2369 24.0283 14.2578 24.0388 14.2762C24.3495 14.5533 24.6215 14.8715 24.8473 15.222C24.8745 15.2786 24.8885 15.3406 24.8885 15.4035C24.8885 15.4663 24.8745 15.5283 24.8473 15.5849C24.8049 15.6404 24.7503 15.6852 24.6877 15.7157C24.6251 15.7463 24.5563 15.7617 24.4868 15.7609C24.3999 15.7807 24.3094 15.7769 24.2245 15.7499C23.934 15.5245 23.6668 15.2703 23.4269 14.991C23.4269 14.991 23.3723 14.991 23.3504 15.046C23.3396 15.0702 23.334 15.0965 23.334 15.123C23.334 15.1496 23.3396 15.1758 23.3504 15.2C23.6117 15.5748 23.9558 15.8835 24.3557 16.1018C24.4426 16.1141 24.5309 16.1141 24.6179 16.1018"
        fill="#DAC6A1"
      />
      <path
        d="M24.1918 15.288C24.2333 15.319 24.2824 15.338 24.3338 15.343C24.3604 15.3427 24.3865 15.3355 24.4095 15.322C24.4325 15.3085 24.4516 15.2892 24.4649 15.266C24.4738 15.2328 24.4734 15.1978 24.4637 15.1648C24.4541 15.1318 24.4356 15.1021 24.4103 15.079C24.2182 14.8398 23.9939 14.6288 23.7438 14.4522H23.6455C23.6136 14.4522 23.583 14.4649 23.5605 14.4876C23.5379 14.5103 23.5253 14.541 23.5253 14.5731C23.5253 14.6281 23.5253 14.6831 23.6345 14.7491C23.8531 14.991 24.006 15.134 24.1918 15.321"
        fill="#DAC6A1"
      />
      <path
        d="M23.6564 16.0578L23.0336 15.343H22.9789C22.9507 15.3329 22.9198 15.3329 22.8915 15.343C22.8807 15.3672 22.8751 15.3934 22.8751 15.42C22.8751 15.4465 22.8807 15.4727 22.8915 15.4969L23.2849 15.9478C23.3146 15.9734 23.338 16.0056 23.3532 16.0419C23.3683 16.0782 23.3749 16.1175 23.3723 16.1568C23.3723 16.2998 23.2412 16.4207 23.1101 16.5307C23.0271 16.5894 22.9565 16.6642 22.9025 16.7507C22.8888 16.772 22.8816 16.7968 22.8816 16.8221C22.8816 16.8475 22.8888 16.8723 22.9025 16.8936C22.9094 16.9109 22.9215 16.9256 22.9373 16.9355C22.953 16.9454 22.9714 16.95 22.9899 16.9486H23.0554L23.569 16.5087C23.641 16.4559 23.6893 16.3766 23.7037 16.2881C23.718 16.1996 23.6971 16.1089 23.6455 16.0358"
        fill="#DAC6A1"
      />
      <path
        d="M22.8478 16.2998H22.9134C22.9211 16.2864 22.9251 16.2712 22.9251 16.2558C22.9251 16.2403 22.9211 16.2252 22.9134 16.2118L22.5965 15.6619H22.531C22.5108 15.6651 22.4916 15.6727 22.4747 15.6841C22.4577 15.6955 22.4434 15.7104 22.4326 15.7279V15.7499L22.8478 16.2998Z"
        fill="#DAC6A1"
      />
      <path
        d="M22.9352 7.11674C23.0029 7.22638 23.0968 7.31714 23.2084 7.38069C24.0335 7.67165 24.8134 8.07895 25.5248 8.59043C25.563 8.62355 25.5898 8.66792 25.6016 8.71725C25.6134 8.76659 25.6094 8.81841 25.5903 8.86537C25.5728 8.90576 25.5437 8.93994 25.5067 8.96347C25.4697 8.98701 25.4265 8.9988 25.3827 8.99734C25.3051 8.99692 25.2292 8.97401 25.1642 8.93135C24.5894 8.49858 23.9518 8.15733 23.274 7.91957C23.2695 7.9599 23.279 8.00055 23.3009 8.03462C23.3228 8.06869 23.3558 8.0941 23.3941 8.10653C24.1125 8.42451 24.791 8.82688 25.4155 9.30527C25.4935 9.36715 25.5894 9.40188 25.6887 9.40425C25.7359 9.40246 25.7819 9.38834 25.8222 9.36328C25.8624 9.33821 25.8955 9.30307 25.9181 9.26128C26.0602 8.86537 25.9181 8.50245 25.3718 8.16152C24.6211 7.69928 23.8177 7.33001 22.9789 7.06176L22.9352 7.11674Z"
        fill="#DAC6A1"
      />
      <path
        d="M23.4597 8.52444C23.4532 8.56563 23.4579 8.60783 23.4733 8.64656C23.4886 8.68528 23.5142 8.71909 23.5471 8.74439C23.7001 8.85437 23.9295 8.98634 24.2027 9.14031C24.6368 9.33967 25.0297 9.61949 25.3609 9.96513C25.4011 10.0374 25.4222 10.1188 25.4222 10.2016C25.4222 10.2844 25.4011 10.3658 25.3609 10.438C25.3376 10.4834 25.3034 10.5223 25.2614 10.5511C25.2195 10.5799 25.171 10.5977 25.1205 10.603C25.0498 10.6015 24.9813 10.5785 24.9238 10.537L23.7547 9.86615C23.7559 9.93898 23.772 10.0108 23.8021 10.077C23.8322 10.1433 23.8756 10.2025 23.9295 10.2511C24.1945 10.4671 24.4758 10.662 24.7709 10.8339H24.8473C24.9851 10.9288 25.1417 10.9926 25.3063 11.0209C25.3722 11.0212 25.4367 11.002 25.492 10.9659C25.615 10.8255 25.6973 10.6539 25.7301 10.4697C25.7628 10.2855 25.7447 10.0957 25.6777 9.92114C25.0319 9.32173 24.294 8.83149 23.4925 8.46945"
        fill="#DAC6A1"
      />
      <path
        d="M24.7927 10.2511H24.8692C24.9457 10.2511 25.0331 10.2511 25.0112 10.1851C24.5724 9.83862 24.0959 9.54346 23.5908 9.30527C23.5976 9.35321 23.6164 9.39862 23.6455 9.43724C23.9796 9.74084 24.346 10.0064 24.7381 10.2291"
        fill="#DAC6A1"
      />
      <path
        d="M23.6782 12.0107L24.3884 12.5276C24.4516 12.5753 24.528 12.6022 24.607 12.6046C24.6711 12.6039 24.733 12.5806 24.7818 12.5386C24.9278 12.4192 25.0407 12.2639 25.1096 12.0877C25.1569 11.965 25.1598 11.8295 25.1179 11.7048C25.0759 11.5802 24.9918 11.4743 24.8801 11.4058L23.9186 10.702C23.9022 10.7363 23.8936 10.7739 23.8936 10.8119C23.8936 10.85 23.9022 10.8876 23.9186 10.9219C24.1827 11.1141 24.4279 11.3314 24.6507 11.5708C24.6966 11.6266 24.7269 11.6937 24.7384 11.7653C24.75 11.8368 24.7423 11.9101 24.7162 11.9777C24.7009 12.0213 24.673 12.0594 24.636 12.0868C24.5989 12.1143 24.5546 12.1299 24.5086 12.1317C24.4741 12.1324 24.4397 12.1259 24.4078 12.1127C24.3758 12.0994 24.3469 12.0797 24.3229 12.0547L23.7547 11.7028C23.7373 11.7094 23.7214 11.7197 23.7082 11.7329C23.695 11.7462 23.6848 11.7622 23.6782 11.7797C23.6601 11.8135 23.6505 11.8513 23.6505 11.8897C23.6505 11.9281 23.6601 11.9659 23.6782 11.9997"
        fill="#DAC6A1"
      />
      <path
        d="M24.2464 11.7577C24.2701 11.7572 24.2932 11.7496 24.3126 11.7359C24.3321 11.7222 24.347 11.703 24.3557 11.6808C24.3698 11.6617 24.3775 11.6386 24.3775 11.6148C24.3775 11.591 24.3698 11.5678 24.3557 11.5488L23.8968 11.2848H23.8312V11.3838L24.2355 11.7138L24.2464 11.7577Z"
        fill="#DAC6A1"
      />
      <path
        d="M22.7932 13.3084C22.7767 13.3347 22.7679 13.3653 22.7679 13.3964C22.7679 13.4275 22.7767 13.458 22.7932 13.4844L23.4925 14.0123C23.5389 14.0254 23.5881 14.0254 23.6345 14.0123C23.7479 13.9979 23.8525 13.9433 23.9295 13.8583L24.0169 13.7153C24.2027 13.4074 24.3447 13.1984 24.1262 12.8795C23.9456 12.6263 23.7053 12.4222 23.4269 12.2856C23.4269 12.2856 23.4269 12.2856 23.3614 12.3406C23.3447 12.3768 23.3361 12.4162 23.3361 12.4561C23.3361 12.496 23.3447 12.5354 23.3614 12.5716L23.7219 12.9565C23.7566 13.0146 23.7749 13.0811 23.7749 13.1489C23.7749 13.2167 23.7566 13.2833 23.7219 13.3414C23.6999 13.3961 23.6642 13.4441 23.6182 13.4807C23.5723 13.5174 23.5176 13.5413 23.4597 13.5504C23.4065 13.568 23.349 13.568 23.2958 13.5504L22.9025 13.2534H22.8478C22.8478 13.2534 22.7713 13.2534 22.7495 13.3524"
        fill="#DAC6A1"
      />
      <path
        d="M23.0773 12.8685C23.0658 12.8886 23.0597 12.9113 23.0597 12.9345C23.0597 12.9577 23.0658 12.9804 23.0773 13.0005L23.3286 13.1874H23.3941C23.4115 13.1874 23.4282 13.1805 23.4405 13.1681C23.4528 13.1557 23.4597 13.1389 23.4597 13.1214C23.4748 13.1007 23.4829 13.0757 23.4829 13.05C23.4829 13.0243 23.4748 12.9992 23.4597 12.9785L23.2193 12.7915C23.1973 12.7932 23.1759 12.8 23.1569 12.8115C23.138 12.8229 23.1219 12.8387 23.1101 12.8575"
        fill="#DAC6A1"
      />
      <path
        d="M21.7771 14.2652C21.7604 14.2661 21.7444 14.2717 21.7308 14.2815C21.7173 14.2912 21.7068 14.3046 21.7006 14.3202C21.6843 14.3506 21.6758 14.3846 21.6758 14.4192C21.6758 14.4537 21.6843 14.4877 21.7006 14.5181L22.236 15.145C22.2628 15.1731 22.295 15.1955 22.3307 15.2106C22.3664 15.2257 22.4048 15.2333 22.4436 15.233C22.5765 15.2038 22.7014 15.1453 22.8091 15.0616C22.9168 14.9779 23.0047 14.8712 23.0664 14.7491C23.119 14.6708 23.1515 14.5806 23.1611 14.4866C23.1706 14.3925 23.1568 14.2976 23.121 14.2102C22.9621 13.962 22.7751 13.7332 22.5637 13.5284C22.5637 13.5284 22.5637 13.5284 22.4873 13.5943C22.4662 13.6311 22.4551 13.6728 22.4551 13.7153C22.4551 13.7578 22.4662 13.7995 22.4873 13.8363L22.7276 14.1662C22.7621 14.2304 22.7801 14.3022 22.7801 14.3752C22.7801 14.4481 22.7621 14.5199 22.7276 14.5841C22.7002 14.6349 22.6611 14.6784 22.6136 14.7109C22.5661 14.7435 22.5115 14.7641 22.4545 14.7711C22.3741 14.7664 22.2974 14.7355 22.236 14.6831L21.9082 14.3202L21.7771 14.2652Z"
        fill="#DAC6A1"
      />
      <path
        d="M22.3671 14.4522C22.3877 14.4506 22.4076 14.4437 22.4249 14.4322C22.4421 14.4206 22.4561 14.4048 22.4654 14.3862C22.4733 14.3689 22.4773 14.3502 22.4773 14.3312C22.4773 14.3122 22.4733 14.2934 22.4654 14.2762L22.1813 14.0013C22.1647 14.0021 22.1487 14.0078 22.1351 14.0175C22.1216 14.0273 22.1111 14.0407 22.1048 14.0562C22.097 14.0735 22.0929 14.0923 22.0929 14.1112C22.0929 14.1302 22.097 14.149 22.1048 14.1662L22.3999 14.4522H22.3671Z"
        fill="#DAC6A1"
      />
      <path
        d="M23.3723 21.6336C23.3723 21.6996 23.3723 21.8206 23.5034 21.8096C23.5485 21.8042 23.592 21.7897 23.6315 21.767C23.6709 21.7444 23.7054 21.714 23.7329 21.6776C24.3229 20.9188 24.1153 18.4993 23.3723 17.2785H23.3177C23.2982 17.2796 23.2796 17.2865 23.264 17.2982C23.2485 17.3099 23.2367 17.3261 23.2303 17.3445C23.2139 17.3769 23.2054 17.4127 23.2054 17.449C23.2054 17.4853 23.2139 17.5211 23.2303 17.5535C23.7546 18.5282 23.9682 19.6417 23.8421 20.7428C23.8421 20.8418 23.7766 20.9628 23.6673 20.9738C23.558 20.9847 23.5253 20.9737 23.4706 20.6548C23.3721 19.7904 23.0808 18.9595 22.6184 18.2243C22.5691 18.3781 22.5691 18.5435 22.6184 18.6972C23.0601 19.6201 23.3163 20.6218 23.3723 21.6446"
        fill="#DAC6A1"
      />
      <path
        d="M22.8697 17.5535C22.8313 17.6601 22.8313 17.7768 22.8697 17.8834C23.2452 18.4851 23.4909 19.1596 23.5908 19.863C23.5277 19.0565 23.2849 18.2747 22.8806 17.5755L22.8697 17.5535Z"
        fill="#DAC6A1"
      />
      <path
        d="M19.2531 6.48988L19.5809 6.62185C19.7557 6.70983 19.9305 6.80881 20.1053 6.91879C20.4923 7.1336 20.8199 7.44224 21.0584 7.81673C21.2969 8.19121 21.4388 8.6197 21.4711 9.06332V9.20629C21.7443 10.482 21.9191 11.2519 20.6407 12.2746C20.6096 12.324 20.5931 12.3812 20.5931 12.4396C20.5931 12.498 20.6096 12.5552 20.6407 12.6046C20.6517 12.6335 20.6712 12.6585 20.6965 12.6762C20.7219 12.6938 20.7519 12.7034 20.7828 12.7035C21.1997 12.4889 21.5453 12.1564 21.7771 11.7467C22.52 10.735 21.7006 8.44746 21.4383 7.71062C21.3417 7.46122 21.1947 7.23471 21.0066 7.04542C20.8185 6.85612 20.5935 6.70815 20.3457 6.61085L18.9362 5.951C18.8652 5.90094 18.8086 5.83286 18.7721 5.75368C18.7357 5.67449 18.7206 5.587 18.7286 5.50009C18.7286 5.33513 18.8488 5.30214 19.0346 5.19216C19.228 5.10967 19.4364 5.06848 19.6464 5.07119H20.1709C22.4474 5.1866 24.6496 5.9242 26.5409 7.20472C26.5738 7.23906 26.5964 7.28206 26.6061 7.32876C26.6158 7.37546 26.6121 7.42397 26.5956 7.46867C26.5409 7.57864 26.3989 7.62263 26.1148 7.64463C26.0399 7.6453 25.9657 7.63107 25.8963 7.60276C25.8269 7.57445 25.7638 7.53261 25.7105 7.47967L25.5357 7.18273C25.5357 7.18273 25.5357 7.11674 25.4701 7.11674C25.4046 7.11674 25.4701 7.11674 25.4046 7.19373L25.3281 7.58964C25.3281 7.64463 25.3281 7.66663 25.4046 7.67762C25.6958 7.78122 26.0026 7.83331 26.3115 7.83159C26.8349 7.81755 27.3387 7.62788 27.7428 7.29271C27.8084 7.20473 27.8412 7.12774 27.8193 7.08375C27.7974 7.03976 27.71 7.00677 27.5789 6.99577H27.426C26.9618 7.00618 26.5063 6.86751 26.1257 6.59986C24.0747 5.39667 21.736 4.7806 19.3623 4.81824C19.1586 4.80703 18.9555 4.84869 18.7723 4.93921C18.6729 4.985 18.5855 5.05363 18.5172 5.13958C18.4489 5.22553 18.4015 5.32641 18.379 5.43411C18.3635 5.53994 18.3712 5.64788 18.4014 5.75043C18.4316 5.85298 18.4836 5.94769 18.5538 6.02798C18.7471 6.2282 18.9877 6.37578 19.2531 6.45689"
        fill="#DAC6A1"
      />
      <path
        d="M8.7092 11.2628C8.81846 11.5708 8.97143 11.7467 9.17903 11.7797H10.0968C10.1385 11.7684 10.1756 11.7443 10.203 11.7108C10.2304 11.6773 10.2468 11.6361 10.2498 11.5928C10.2495 11.5589 10.2388 11.526 10.2193 11.4985C10.1997 11.4709 10.1723 11.4501 10.1405 11.4388H9.40848C9.13533 11.4388 9.00421 11.0429 8.89495 10.647C8.82063 10.3048 8.83485 9.94914 8.93624 9.61408C9.03764 9.27901 9.22282 8.97577 9.47404 8.73339L9.52867 8.64541H9.46311C9.44391 8.63698 9.42751 8.62317 9.41589 8.60562C9.40427 8.58807 9.3979 8.56752 9.39756 8.54644C9.39442 8.51298 9.3998 8.47928 9.41318 8.44849C9.42656 8.41771 9.4475 8.39086 9.47404 8.37047L9.59423 8.2605H9.51774C9.09479 8.52269 8.72422 8.86211 8.42511 9.26128C8.36596 9.34486 8.32891 9.44222 8.31744 9.54418C8.30597 9.64615 8.32047 9.74938 8.35956 9.84416L8.7092 11.2628Z"
        fill="#DAC6A1"
      />
      <path
        d="M10.5776 10.537C10.4263 10.5899 10.2679 10.6196 10.1078 10.625C10.0036 10.6344 9.89869 10.6206 9.80047 10.5844C9.70226 10.5483 9.61318 10.4908 9.5396 10.416H9.48497C9.47475 10.4404 9.46948 10.4666 9.46948 10.493C9.46948 10.5195 9.47475 10.5456 9.48497 10.57C9.55278 10.657 9.63891 10.7277 9.73716 10.7772C9.8354 10.8266 9.94332 10.8535 10.0531 10.8559C10.2588 10.8418 10.4544 10.7608 10.6104 10.625C10.6104 10.625 10.665 10.559 10.6104 10.537"
        fill="#DAC6A1"
      />
      <path
        d="M9.25551 9.69019C9.21904 9.78196 9.21904 9.88435 9.25551 9.97613C9.27467 10.0074 9.30012 10.0344 9.33023 10.0552C9.36033 10.076 9.39443 10.0903 9.43033 10.0971H9.59423C10.0904 10.029 10.5528 9.80586 10.9163 9.45924V9.39325C10.5654 9.61449 10.1696 9.75355 9.75812 9.80016C9.65979 9.80016 9.61608 9.73418 9.60516 9.69019C9.59423 9.6462 9.60515 9.49223 9.70349 9.33826C9.86658 9.19789 10.0132 9.03923 10.1405 8.86537C10.1405 8.86537 10.1405 8.78838 10.1405 8.7224C10.1345 8.66758 10.1345 8.61225 10.1405 8.55743C10.1346 8.51733 10.1346 8.47656 10.1405 8.43646C10.1417 8.34292 10.1767 8.253 10.2389 8.18351C10.3017 8.11018 10.3754 8.04711 10.4574 7.99655C10.4861 7.97862 10.5081 7.95164 10.52 7.91981C10.5318 7.88798 10.5329 7.85309 10.523 7.82059C10.5055 7.77315 10.4743 7.73207 10.4334 7.70267C10.3925 7.67326 10.3438 7.65687 10.2935 7.65563C10.0204 7.75461 9.93294 7.88658 9.96572 8.12852C9.99414 8.23679 9.99606 8.35037 9.97132 8.45955C9.94658 8.56872 9.89592 8.67023 9.82368 8.75539C9.59435 9.02233 9.40647 9.32266 9.26644 9.6462"
        fill="#DAC6A1"
      />
      <path
        d="M10.3481 8.42546C10.3347 8.44887 10.3276 8.47542 10.3276 8.50244C10.3276 8.52947 10.3347 8.55602 10.3481 8.57943C10.4149 8.65434 10.4596 8.74659 10.4769 8.84572C10.4943 8.94485 10.4838 9.0469 10.4465 9.14031C10.5466 9.05535 10.6158 8.93927 10.6432 8.81038C10.6572 8.67271 10.6181 8.53489 10.5339 8.42546C10.5339 8.42546 10.4465 8.33748 10.4028 8.34848C10.3591 8.35948 10.3372 8.34848 10.3263 8.43646"
        fill="#DAC6A1"
      />
      <path
        d="M17.3847 31.0256C17.7596 31.3884 18.0183 31.8556 18.1277 32.3673C18.3681 33.0601 18.6194 33.764 19.1438 33.896C19.2124 33.9088 19.2828 33.9088 19.3514 33.896C19.3344 33.8725 19.3119 33.8536 19.2859 33.841C18.969 33.731 18.7833 33.1921 18.5866 32.5762C18.3899 31.9604 18.073 31.0366 17.4939 30.8716H17.3191C17.2795 30.8633 17.2386 30.8633 17.1989 30.8716C17.1989 30.8716 17.1989 30.8716 17.3082 30.9926"
        fill="#DAC6A1"
      />
      <path
        d="M18.3462 30.8936C18.2996 30.882 18.2508 30.882 18.2042 30.8936L18.2697 30.9596C18.6303 31.1576 18.8488 31.7404 19.0892 32.3673C19.3296 32.9942 19.6574 33.907 20.1818 33.896H20.302C19.9851 33.742 19.7885 33.1921 19.5699 32.6092C19.2968 31.8504 18.9799 30.9926 18.3571 30.9046"
        fill="#DAC6A1"
      />
      <path
        d="M20.1163 32.5542C20.3348 33.1481 20.6079 33.896 21.2089 33.918H21.2744C20.9241 33.6032 20.6765 33.1892 20.5642 32.7302C20.4222 32.2683 20.2911 31.8724 19.8212 31.7404H19.7011V31.7954C19.865 31.8834 19.9633 32.1693 20.1053 32.5433"
        fill="#DAC6A1"
      />
      <path
        d="M18.368 30.4977H18.5647C18.6111 30.4977 18.6556 30.4792 18.6883 30.4462C18.7211 30.4132 18.7395 30.3684 18.7395 30.3217C18.7404 30.286 18.7288 30.2511 18.7069 30.223C18.685 30.195 18.654 30.1754 18.6194 30.1678H18.226C17.9571 30.1832 17.6876 30.1535 17.4284 30.0798H17.3301C17.2794 30.0712 17.2277 30.0712 17.1771 30.0798C17.1225 30.0798 17.0569 30.0798 17.035 30.1348C17.0169 30.1685 17.0074 30.2063 17.0074 30.2447C17.0074 30.2832 17.0169 30.3209 17.035 30.3547C17.1771 30.5417 17.4939 30.6187 17.9966 30.6187H18.3571"
        fill="#DAC6A1"
      />
      <path
        d="M23.4597 30.4427C23.4131 30.3104 23.3221 30.1985 23.2025 30.1263C23.0829 30.0541 22.9421 30.0259 22.8041 30.0468C22.7128 30.0408 22.6213 30.0533 22.5348 30.0834C22.4483 30.1135 22.3687 30.1606 22.3005 30.2221C22.2323 30.2835 22.177 30.358 22.1378 30.4412C22.0986 30.5244 22.0762 30.6146 22.0721 30.7066C22.0579 30.7495 22.0579 30.7958 22.0721 30.8386C22.1118 30.8727 22.1619 30.8921 22.2141 30.8936C22.2477 30.8933 22.2805 30.8826 22.3078 30.8629C22.3352 30.8432 22.3559 30.8155 22.3671 30.7836C22.3671 30.4647 22.6184 30.4207 22.6949 30.4207C22.7636 30.4207 22.8308 30.4417 22.8874 30.481C22.944 30.5203 22.9873 30.576 23.0117 30.6407C23.0259 30.6982 23.0219 30.7587 23.0004 30.8139C22.9788 30.8691 22.9408 30.9161 22.8915 30.9486C22.8458 30.9718 22.8051 31.004 22.7719 31.0434C22.7387 31.0827 22.7138 31.1283 22.6985 31.1776C22.6832 31.2268 22.6779 31.2787 22.6829 31.33C22.6879 31.3814 22.7031 31.4312 22.7276 31.4765C22.8463 31.6637 22.9094 31.8812 22.9094 32.1033C22.9094 32.3255 22.8463 32.5429 22.7276 32.7302C22.7012 32.783 22.6864 32.8409 22.6845 32.8999C22.6825 32.959 22.6933 33.0178 22.7162 33.0722C22.7391 33.1266 22.7734 33.1754 22.8169 33.2151C22.8604 33.2548 22.912 33.2845 22.968 33.3021C22.9912 33.3401 23.0035 33.3839 23.0035 33.4286C23.0035 33.4732 22.9912 33.517 22.968 33.555C22.9407 33.6073 22.8999 33.6512 22.8499 33.6821C22.7999 33.7131 22.7426 33.7299 22.6839 33.731C22.6106 33.7306 22.5396 33.7054 22.4821 33.6596C22.4247 33.6137 22.3842 33.5498 22.3671 33.478C22.3592 33.4495 22.3454 33.423 22.3265 33.4002C22.3077 33.3775 22.2843 33.359 22.2578 33.3461C22.2299 33.3473 22.2026 33.3549 22.1781 33.3682C22.1535 33.3816 22.1322 33.4003 22.1158 33.4231C22.0963 33.4725 22.0963 33.5276 22.1158 33.577C22.3234 33.9839 22.5637 34.1819 22.8697 34.1709C23.0218 34.1684 23.1713 34.1308 23.3067 34.0609C23.3688 34.0117 23.4202 33.9502 23.4578 33.8802C23.4954 33.8102 23.5184 33.7333 23.5253 33.654C23.5361 33.503 23.4892 33.3535 23.3941 33.2361C23.2303 33.1481 23.2084 32.9502 23.2958 32.6532C23.3781 32.4955 23.4211 32.32 23.4211 32.1418C23.4211 31.9637 23.3781 31.7882 23.2958 31.6304C23.2459 31.5395 23.2263 31.4348 23.2401 31.3318C23.2539 31.2288 23.3002 31.133 23.3723 31.0586C23.4394 30.9815 23.4832 30.8867 23.4987 30.7854C23.5142 30.6842 23.5007 30.5805 23.4597 30.4867"
        fill="#DAC6A1"
      />
      <path
        d="M16.9039 33.2691C16.8902 33.2275 16.8638 33.1913 16.8285 33.1657C16.7932 33.14 16.7508 33.1262 16.7073 33.1261H16.6308L16.4669 33.4231C16.4421 33.4616 16.4081 33.4934 16.3681 33.5153C16.328 33.5373 16.2831 33.5488 16.2374 33.5488C16.1918 33.5488 16.1469 33.5373 16.1068 33.5153C16.0667 33.4934 16.0327 33.4616 16.008 33.4231C15.9887 33.3837 15.9787 33.3405 15.9787 33.2966C15.9787 33.2527 15.9887 33.2095 16.008 33.1701C16.0385 33.0429 16.1168 32.9325 16.2265 32.8622C16.2591 32.7974 16.2761 32.7258 16.2761 32.6532C16.2761 32.5806 16.2591 32.509 16.2265 32.4443C16.0834 32.1387 16.0524 31.7919 16.1391 31.4655L16.2483 31.0256C16.2714 30.9547 16.2699 30.8781 16.2441 30.8082C16.2183 30.7383 16.1697 30.6792 16.1063 30.6407C16.0461 30.6045 15.9994 30.5493 15.9737 30.4836C15.948 30.4179 15.9447 30.3455 15.9643 30.2777C15.9798 30.2212 16.0122 30.1708 16.0572 30.1334C16.1021 30.096 16.1574 30.0734 16.2156 30.0688C16.2513 30.059 16.2891 30.059 16.3248 30.0688C16.3724 30.0875 16.4149 30.1171 16.449 30.1553C16.4832 30.1935 16.508 30.2392 16.5215 30.2887V30.3767C16.5458 30.4104 16.5768 30.4386 16.6125 30.4594C16.6483 30.4802 16.688 30.4933 16.7291 30.4977C16.7643 30.5112 16.8032 30.5112 16.8384 30.4977C16.8552 30.4596 16.864 30.4184 16.864 30.3767C16.864 30.335 16.8552 30.2938 16.8384 30.2557C16.7943 30.0962 16.698 29.9562 16.5652 29.8585C16.4324 29.7607 16.2707 29.7108 16.1063 29.7169C16.0254 29.7144 15.9448 29.7288 15.8696 29.7591C15.7944 29.7893 15.7262 29.8349 15.6693 29.8928C15.6167 29.9501 15.5769 30.018 15.5524 30.0919C15.5279 30.1658 15.5193 30.2442 15.5272 30.3217C15.5211 30.3951 15.5317 30.4689 15.5582 30.5375C15.5847 30.6061 15.6264 30.6677 15.6802 30.7176C15.7436 30.8097 15.7776 30.919 15.7776 31.0311C15.7776 31.1431 15.7436 31.2525 15.6802 31.3445C15.6216 31.4817 15.5913 31.6295 15.5913 31.7789C15.5913 31.9283 15.6216 32.0761 15.6802 32.2133C15.7731 32.4424 15.7731 32.6991 15.6802 32.9282L15.6255 33.0271C15.5797 33.0851 15.5487 33.1536 15.5353 33.2265C15.522 33.2994 15.5267 33.3744 15.5491 33.4451C15.5776 33.5817 15.654 33.7036 15.7643 33.7883C15.8746 33.8731 16.0115 33.9152 16.15 33.907C16.3054 33.9074 16.4575 33.8615 16.5871 33.775C16.6764 33.7079 16.75 33.6219 16.8029 33.5231C16.8557 33.4243 16.8865 33.3151 16.893 33.2031"
        fill="#DAC6A1"
      />
      <path
        d="M21.9847 34.1159C21.9052 34.1158 21.8282 34.143 21.7661 34.1929C21.6483 34.2669 21.5117 34.3051 21.3728 34.3029H21.2744C19.9851 34.3029 18.7068 34.3029 17.3847 34.2149C17.2506 34.2075 17.1199 34.1699 17.0023 34.1049C16.9209 34.0645 16.8307 34.0456 16.74 34.0499C16.6745 34.0499 16.6308 34.0499 16.6089 34.0499C16.5925 34.0842 16.5839 34.1218 16.5839 34.1599C16.5839 34.198 16.5925 34.2356 16.6089 34.2699C16.8711 34.6548 19.0346 34.6108 19.8868 34.5998H21.4165C21.6747 34.5974 21.9275 34.5252 22.1485 34.3909C22.1792 34.3746 22.2035 34.3483 22.2174 34.3163C22.2313 34.2844 22.234 34.2486 22.225 34.2149C22.2107 34.1715 22.1827 34.134 22.1452 34.1082C22.1077 34.0823 22.0628 34.0696 22.0174 34.0719"
        fill="#DAC6A1"
      />
      <path
        d="M17.3519 7.03976C18.5866 7.3257 19.4607 7.72161 19.7011 8.76639C19.6727 9.05545 19.7591 9.34406 19.9414 9.56921V9.48123C20.005 9.0726 19.944 8.65416 19.7665 8.28111C19.589 7.90807 19.3033 7.59796 18.9471 7.39168C18.4816 7.10682 17.9719 6.90238 17.4393 6.78682C17.3069 6.77025 17.186 6.70243 17.1024 6.59774C17.0188 6.49304 16.979 6.35969 16.9913 6.22594C16.991 6.05829 17.054 5.89679 17.1676 5.77424C17.2813 5.65168 17.437 5.57726 17.6032 5.56608H17.6797C17.789 5.56608 17.8436 5.56608 17.8436 5.4891C17.8436 5.41211 17.8436 5.4891 17.778 5.4891H17.6251C17.2099 5.4891 16.8056 5.58807 16.7619 6.24793C16.7073 6.74282 16.8711 6.99577 17.2973 7.07275"
        fill="#DAC6A1"
      />
      <path
        d="M17.5267 5.96199C17.7453 5.96199 17.8327 6.04997 17.8327 6.13796C17.8327 6.22594 17.7562 6.31392 17.5267 6.33591H17.8436C17.9168 6.34684 17.9916 6.33838 18.0605 6.31139C18.1295 6.28439 18.1903 6.23978 18.2369 6.18195C18.2525 6.15728 18.2607 6.12867 18.2607 6.09946C18.2607 6.07025 18.2525 6.04165 18.2369 6.01698C18.1913 5.95677 18.1314 5.90909 18.0626 5.87833C17.9939 5.84758 17.9186 5.83475 17.8436 5.84102C17.7642 5.82531 17.6826 5.82531 17.6032 5.84102"
        fill="#DAC6A1"
      />
      <path
        d="M19.2312 7.18273C19.2989 7.20321 19.3711 7.20321 19.4388 7.18273C19.4916 7.20304 19.55 7.20304 19.6027 7.18273C19.4285 7.00752 19.212 6.88093 18.9744 6.81537C18.7369 6.74982 18.4865 6.74756 18.2479 6.80881C18.1277 6.8748 19.111 6.80881 19.2531 7.20472"
        fill="#DAC6A1"
      />
      <path
        d="M19.4498 9.1513C19.2563 8.76818 18.9514 8.45357 18.5757 8.2495C18.4882 8.2495 18.4664 8.2495 18.4882 8.30449C19.0392 8.75486 19.424 9.37839 19.5809 10.0751C19.594 10.1418 19.593 10.2106 19.5779 10.2769C19.5629 10.3433 19.5341 10.4057 19.4935 10.46L19.3296 10.625C19.314 10.6497 19.3058 10.6783 19.3058 10.7075C19.3058 10.7367 19.314 10.7653 19.3296 10.79C19.3457 10.8228 19.3706 10.8504 19.4015 10.8698C19.4324 10.8893 19.468 10.8997 19.5044 10.8999L20.1053 10.438C20.1479 10.3895 20.1712 10.3268 20.1709 10.2621C20.1746 10.2585 20.1783 10.2548 20.1818 10.2511C19.8603 9.98078 19.6185 9.62707 19.4825 9.22829"
        fill="#DAC6A1"
      />
      <path
        d="M17.7562 9.6132C17.7452 9.64149 17.7452 9.6729 17.7562 9.70118C17.8711 10.2653 17.9188 10.8413 17.8982 11.4168C17.8857 11.4524 17.8857 11.4912 17.8982 11.5268C17.9666 11.5798 18.053 11.6035 18.1386 11.5928C18.3568 11.5374 18.5639 11.4444 18.7505 11.3178C18.828 11.2715 18.892 11.2054 18.9362 11.1263C18.9803 11.0471 19.0029 10.9577 19.0018 10.8669C18.9382 10.1742 18.672 9.51592 18.2369 8.97534C18.2369 8.97534 18.2369 8.97534 18.1714 8.97534C18.1588 9.01468 18.1588 9.05698 18.1714 9.09632C18.6849 10.0311 18.8051 10.614 18.5866 10.9989C18.4985 11.0909 18.3838 11.1525 18.2588 11.1749C18.1823 11.1749 18.084 11.1749 18.0512 10.9329C18.0332 10.4997 17.9446 10.0725 17.789 9.66819L17.7562 9.6132Z"
        fill="#DAC6A1"
      />
      <path
        d="M18.4336 10.614C18.4445 10.5595 18.4445 10.5035 18.4336 10.449C18.3398 9.98937 18.1659 9.55003 17.9201 9.1513C18.0945 9.62896 18.2226 10.1225 18.3025 10.625C18.3025 10.625 18.4118 10.757 18.4336 10.57"
        fill="#DAC6A1"
      />
      <path
        d="M19.1875 10.2511C19.264 10.394 19.3514 10.1961 19.3405 10.1411C19.1657 9.55822 18.6194 8.66741 18.4773 8.7224C18.7781 9.19926 19.0168 9.71302 19.1875 10.2511Z"
        fill="#DAC6A1"
      />
      <path
        d="M16.5871 11.3508L16.6854 10.636C16.694 10.619 16.6985 10.6001 16.6985 10.581C16.6985 10.5619 16.694 10.543 16.6854 10.526C16.6854 10.526 16.6854 10.526 16.6089 10.614C16.5324 10.702 16.2374 11.6038 16.3904 11.8787C16.4041 11.9048 16.4245 11.9268 16.4495 11.9423C16.4744 11.9577 16.5031 11.9662 16.5324 11.9667H16.74C16.8508 11.9737 16.9617 11.9567 17.0654 11.9169C17.1691 11.877 17.263 11.8153 17.341 11.7357C17.6469 11.4058 17.5923 10.735 17.5595 10.1411V10.0201C17.5595 9.89914 17.4939 9.85515 17.4612 9.85515H17.3956C17.3845 9.88121 17.3787 9.90927 17.3787 9.93763C17.3787 9.96599 17.3845 9.99406 17.3956 10.0201C17.4145 10.4761 17.3323 10.9307 17.1552 11.3508C17.12 11.4203 17.069 11.4804 17.0064 11.5263C16.9437 11.5722 16.8712 11.6025 16.7947 11.6148C16.7073 11.6148 16.598 11.5488 16.5871 11.3508Z"
        fill="#DAC6A1"
      />
      <path
        d="M17.0241 11.0869C17.0407 10.8379 17.0407 10.588 17.0241 10.339C17.0067 10.339 16.9901 10.346 16.9778 10.3584C16.9655 10.3707 16.9586 10.3875 16.9586 10.405C16.9517 10.6492 16.9224 10.8921 16.8711 11.1309C16.8595 11.1666 16.8595 11.2051 16.8711 11.2409C16.9041 11.241 16.9359 11.2286 16.9602 11.2062C16.9845 11.1837 16.9995 11.1529 17.0023 11.1199"
        fill="#DAC6A1"
      />
      <path
        d="M16.6745 8.99734C16.6878 9.00506 16.7028 9.00913 16.7182 9.00913C16.7335 9.00913 16.7486 9.00506 16.7619 8.99734C16.773 8.97103 16.7736 8.9414 16.7634 8.91471C16.7532 8.88802 16.733 8.86637 16.7073 8.85437C16.5106 8.77738 16.0407 8.54643 15.8222 8.49145C15.8142 8.50266 15.8099 8.51613 15.8099 8.52994C15.8099 8.54375 15.8142 8.55721 15.8222 8.56843C16.1087 8.69156 16.3862 8.83489 16.6526 8.99734"
        fill="#DAC6A1"
      />
      <path
        d="M15.0355 11.9997C15.1442 12.0854 15.2801 12.1284 15.4179 12.1207C15.548 12.1247 15.6758 12.0861 15.7822 12.0107C15.8886 11.9354 15.9678 11.8273 16.008 11.7028L16.2046 10.8779C16.2133 10.8629 16.2178 10.8458 16.2178 10.8284C16.2178 10.8111 16.2133 10.794 16.2046 10.779H16.1391C16.0626 10.779 15.9643 10.8559 15.9315 11.0209C15.8898 11.2841 15.801 11.5375 15.6693 11.7687C15.653 11.795 15.6305 11.8168 15.6038 11.8321C15.5771 11.8475 15.547 11.8559 15.5163 11.8567C15.4918 11.8611 15.4665 11.857 15.4447 11.845C15.4228 11.833 15.4057 11.8139 15.3961 11.7907C15.381 11.77 15.3729 11.745 15.3729 11.7192C15.3729 11.6935 15.381 11.6685 15.3961 11.6478C15.4799 11.5288 15.5393 11.3942 15.5709 11.2519C15.5786 11.2385 15.5826 11.2233 15.5826 11.2079C15.5826 11.1924 15.5786 11.1772 15.5709 11.1639L15.4726 11.2189C15.3681 11.4241 15.2397 11.6161 15.0902 11.7907C15.0246 11.9007 15.0137 11.9777 15.0902 12.0437"
        fill="#DAC6A1"
      />
      <path
        d="M12.8393 11.1639C12.7782 11.1498 12.7147 11.1498 12.6536 11.1639C12.588 11.1639 12.5334 11.1639 12.5225 11.2189C12.5116 11.2738 12.5225 11.2958 12.5225 11.3068C12.8923 11.5177 13.1663 11.865 13.2866 12.2754C13.4069 12.6858 13.3641 13.1272 13.1671 13.5064C13.1555 13.5421 13.1555 13.5806 13.1671 13.6163C13.2157 13.6058 13.2608 13.5831 13.2982 13.5504C13.4307 13.3616 13.5226 13.1472 13.568 12.9207C13.6134 12.6942 13.6114 12.4607 13.562 12.235C13.5127 12.0094 13.4171 11.7966 13.2813 11.6103C13.1456 11.4239 12.9727 11.2681 12.7738 11.1529"
        fill="#DAC6A1"
      />
      <path
        d="M5.45316 14.9471C5.45316 15.024 5.45316 15.068 5.54057 15.09H5.5952C5.62429 15.0884 5.65251 15.0795 5.67732 15.0642C5.70213 15.0488 5.72272 15.0275 5.73725 15.002C5.75374 14.9757 5.7625 14.9452 5.7625 14.9141C5.7625 14.8829 5.75374 14.8524 5.73725 14.8261C5.57335 14.5401 5.73725 14.4082 5.84651 14.2542C5.89551 14.2077 5.93946 14.1561 5.97762 14.1002C5.98922 14.0763 5.99524 14.0499 5.99524 14.0233C5.99524 13.9966 5.98922 13.9703 5.97762 13.9463C5.97488 13.9132 5.95986 13.8824 5.93556 13.86C5.91126 13.8376 5.87947 13.8252 5.84651 13.8253C5.79102 13.8269 5.73746 13.8461 5.69354 13.8803C5.60474 13.972 5.50575 14.0532 5.39853 14.1222H5.33297C5.33297 14.1222 5.22371 14.1992 5.33297 14.3642C5.41488 14.5196 5.4843 14.6815 5.54057 14.8481"
        fill="#DAC6A1"
      />
      <path
        d="M6.07596 15.222C6.09503 15.2557 6.12186 15.2842 6.15418 15.3053C6.18651 15.3263 6.22338 15.3392 6.26171 15.343C6.27362 15.3488 6.2867 15.3518 6.29995 15.3518C6.3132 15.3518 6.32628 15.3488 6.33819 15.343C6.35783 15.2998 6.368 15.2529 6.368 15.2055C6.368 15.158 6.35783 15.1112 6.33819 15.068C6.1743 14.6831 6.33819 14.5511 6.55672 14.3532C6.57443 14.3335 6.58582 14.3088 6.5894 14.2825C6.59297 14.2562 6.58857 14.2294 6.57676 14.2056C6.56495 14.1819 6.54629 14.1622 6.52322 14.1493C6.50015 14.1364 6.47374 14.1308 6.44746 14.1332H6.33819C5.90114 14.3972 5.82466 14.6721 6.02133 15.233"
        fill="#DAC6A1"
      />
      <path
        d="M6.60042 14.8811L6.68783 15.398C6.69938 15.4357 6.72251 15.4688 6.75392 15.4926C6.78533 15.5163 6.8234 15.5293 6.86265 15.5299C6.88393 15.5304 6.905 15.5256 6.92404 15.516C6.94307 15.5064 6.95951 15.4923 6.97192 15.4749C6.9854 15.4476 6.99241 15.4175 6.99241 15.387C6.99241 15.3564 6.9854 15.3263 6.97192 15.299C6.91683 15.1946 6.89664 15.075 6.91435 14.9582C6.93207 14.8413 6.98674 14.7333 7.07025 14.6501L7.256 14.4742C7.26948 14.4468 7.27649 14.4167 7.27649 14.3862C7.27649 14.3556 7.26948 14.3255 7.256 14.2982C7.23387 14.2716 7.20443 14.2522 7.17138 14.2425C7.13834 14.2327 7.10315 14.2329 7.07025 14.2432H6.99377L6.74246 14.4632C6.67363 14.5001 6.61903 14.5591 6.58735 14.6308C6.55567 14.7026 6.54874 14.7829 6.56764 14.8591"
        fill="#DAC6A1"
      />
      <path
        d="M12.151 11.4938C12.1152 11.484 12.0775 11.484 12.0417 11.4938C12.0049 11.4925 11.9686 11.5037 11.9389 11.5256C11.9092 11.5476 11.8876 11.579 11.8778 11.6148C11.8567 11.6686 11.8516 11.7274 11.8633 11.7841C11.8749 11.8408 11.9028 11.8928 11.9434 11.9337C12.2505 12.1237 12.4823 12.4153 12.599 12.7585C12.6284 12.9141 12.6241 13.0742 12.5864 13.228C12.5487 13.3817 12.4784 13.5254 12.3804 13.6493L10.7306 15.167C9.63793 16.2118 9.49589 17.1686 10.2717 18.0594H10.3263C10.3318 18.0156 10.3318 17.9712 10.3263 17.9274C9.7472 16.7067 10.5339 16.0248 11.5282 15.156C12.0527 14.7186 12.5389 14.2366 12.9814 13.7153C13.3529 12.9455 13.0906 12.2196 12.1728 11.5158"
        fill="#DAC6A1"
      />
      <path
        d="M12.7847 17.7185C12.5363 17.7238 12.2883 17.7421 12.0417 17.7734H11.9652C11.809 17.7878 11.6517 17.7878 11.4954 17.7734C11.0584 17.7734 10.7415 17.6195 10.5557 16.7947C10.5557 16.6847 10.5557 16.6517 10.4902 16.6187C10.4442 16.6356 10.4053 16.6676 10.3795 16.7095C10.3538 16.7513 10.3427 16.8007 10.3481 16.8496C10.3481 17.9494 11.0693 17.9494 12.0964 17.9494C12.4213 17.9473 12.7461 17.9657 13.0688 18.0044C13.3062 18.0535 13.5259 18.1663 13.7048 18.3309C13.8837 18.4955 14.015 18.7056 14.0849 18.9392C14.1289 19.1639 14.1091 19.3964 14.028 19.6104C13.9468 19.8243 13.8076 20.0109 13.626 20.1489C13.5277 20.2369 13.4949 20.3139 13.5168 20.3799C13.5431 20.4192 13.579 20.451 13.6212 20.4722C13.6633 20.4934 13.7101 20.5033 13.7572 20.5009C13.8069 20.5169 13.8604 20.5169 13.9101 20.5009C14.1457 20.3294 14.3261 20.0921 14.4291 19.8184C14.532 19.5448 14.5529 19.2467 14.4892 18.9612C14.4095 18.6384 14.234 18.3476 13.9861 18.1276C13.7383 17.9076 13.4297 17.7687 13.1016 17.7295H12.7847"
        fill="#DAC6A1"
      />
      <path
        d="M10.9491 13.7043C10.3027 14.0018 9.76981 14.5026 9.43084 15.1315C9.09187 15.7603 8.96514 16.4829 9.06977 17.1906C9.14679 17.6944 9.39037 18.1573 9.76114 18.5046C10.1319 18.8518 10.6082 19.0631 11.113 19.1042H12.9268C12.9835 19.1019 13.0397 19.1149 13.0897 19.142C13.1397 19.1691 13.1815 19.2092 13.2108 19.2581C13.2348 19.3242 13.2414 19.3954 13.2299 19.4648C13.2184 19.5342 13.1893 19.5994 13.1453 19.654C13.0906 19.72 13.0906 19.775 13.1453 19.797C13.2036 19.7901 13.2578 19.7629 13.2982 19.72C13.4026 19.6399 13.4797 19.5292 13.5188 19.4031C13.5579 19.277 13.5572 19.1418 13.5168 19.0162C13.4703 18.9075 13.3921 18.8157 13.2926 18.7528C13.1931 18.69 13.0769 18.6591 12.9595 18.6643H12.1291C11.6225 18.7282 11.108 18.6639 10.6322 18.4773C10.2874 18.314 9.99379 18.0583 9.78371 17.7382C9.57364 17.4182 9.45516 17.046 9.44126 16.6627C9.46669 16.0914 9.63918 15.5367 9.94182 15.0527C10.2445 14.5688 10.6669 14.1724 11.1676 13.9023C11.6812 13.5724 12.2602 13.1544 12.3804 12.8025C12.3958 12.766 12.4037 12.7267 12.4037 12.687C12.4037 12.6474 12.3958 12.6081 12.3804 12.5716C12.3445 12.5627 12.3071 12.5627 12.2712 12.5716C11.9157 12.9941 11.4716 13.3321 10.9709 13.5614"
        fill="#DAC6A1"
      />
      <path
        d="M7.81324 17.3445C7.74873 17.5022 7.73298 17.6757 7.76807 17.8425C7.80316 18.0093 7.88745 18.1616 8.00992 18.2793C8.31958 18.5386 8.64831 18.7739 8.99328 18.9832C9.16048 19.1135 9.29639 19.28 9.39096 19.4704C9.48553 19.6608 9.53633 19.8701 9.5396 20.0829C9.5396 20.1819 9.5396 20.2809 9.59423 20.3909C9.62864 20.5699 9.71953 20.733 9.8534 20.8558C9.98726 20.9787 10.1569 21.0547 10.3372 21.0727C10.3699 21.0749 10.4024 21.0664 10.4299 21.0486C10.4574 21.0308 10.4786 21.0046 10.4902 20.9737C10.4902 20.9188 10.4902 20.8858 10.4028 20.8748C10.0204 20.7208 9.84553 20.5668 9.81276 20.3139C9.75428 19.7965 9.56216 19.3036 9.25551 18.8842C8.9109 18.6755 8.58546 18.4363 8.28307 18.1694C8.22211 18.1097 8.18026 18.0331 8.16288 17.9494C8.11671 17.4046 8.25958 16.8605 8.56716 16.4097C8.63296 16.0484 8.57194 15.6753 8.39454 15.3543C8.21714 15.0333 7.9344 14.7844 7.59472 14.6501H7.49638C7.44175 14.6501 7.43082 14.6501 7.43082 14.6501C7.42585 14.6783 7.42827 14.7074 7.43785 14.7344C7.44743 14.7614 7.46384 14.7854 7.48545 14.8041C8.16288 15.321 8.57808 15.8159 7.81324 17.3665"
        fill="#DAC6A1"
      />
      <path
        d="M8.09733 19.3681C8.30456 19.4871 8.47594 19.6604 8.59328 19.8695C8.71062 20.0786 8.76956 20.3158 8.76383 20.5558C8.85124 21.7546 9.44126 22.3485 10.5339 22.3265C10.7069 22.33 10.8773 22.2842 11.0256 22.1945C11.0248 22.152 11.0145 22.1101 10.9956 22.0721C10.9767 22.034 10.9496 22.0007 10.9163 21.9745C10.8876 21.9351 10.8496 21.9034 10.8057 21.8823C10.7619 21.8612 10.7136 21.8513 10.665 21.8536C10.6143 21.8455 10.5627 21.8455 10.512 21.8536C10.4216 21.891 10.3256 21.9133 10.228 21.9195C10.1483 21.9325 10.0672 21.9325 9.98758 21.9195C9.71964 21.8538 9.48095 21.7005 9.30892 21.4836C9.13689 21.2666 9.04125 20.9983 9.03699 20.7208C9.07808 20.4644 9.05008 20.2016 8.95591 19.9598C8.86174 19.718 8.70485 19.5061 8.5016 19.3461C8.06795 19.1129 7.69394 18.7816 7.40897 18.3783C7.28816 18.159 7.23031 17.9101 7.24189 17.6596C7.25347 17.4091 7.33401 17.1667 7.47453 16.9596L7.60564 16.6847C7.6857 16.4974 7.72304 16.2945 7.71491 16.0908C7.71491 15.4969 7.56194 15.167 7.24507 15.079H7.20137C7.20137 15.079 7.10303 15.079 7.09211 15.079C7.08118 15.079 7.09211 15.189 7.20137 15.299C7.59472 15.6179 7.58379 16.1678 7.20137 17.0696C7.07161 17.2631 6.99169 17.486 6.9688 17.7183C6.94591 17.9506 6.98078 18.1849 7.07025 18.4003C7.33866 18.7865 7.68029 19.1154 8.07547 19.3681"
        fill="#DAC6A1"
      />
      <path
        d="M11.5937 22.1945H11.6921C11.6921 22.1945 11.6921 22.1945 11.6921 22.1285C11.5931 22.0805 11.4851 22.0543 11.3752 22.0515C11.3931 22.0978 11.4248 22.1374 11.4658 22.1649C11.5069 22.1925 11.5553 22.2066 11.6047 22.2055"
        fill="#DAC6A1"
      />
      <path
        d="M12.2602 22.0515C12.2661 22.0225 12.2661 21.9926 12.2602 21.9635C12.1438 21.8864 12.0062 21.8479 11.8669 21.8536C11.8669 21.8536 11.8669 21.8536 11.8669 21.9305C11.9762 22.0161 12.1108 22.0625 12.2493 22.0625L12.2602 22.0515Z"
        fill="#DAC6A1"
      />
      <path
        d="M12.3367 21.6116H12.2384C12.2724 21.6854 12.3289 21.7465 12.3995 21.786C12.4702 21.8255 12.5515 21.8415 12.6317 21.8316H12.7847C12.7847 21.8316 12.7847 21.8316 12.7847 21.7656C12.7249 21.6979 12.6505 21.6448 12.5671 21.6105C12.4838 21.5762 12.3938 21.5615 12.304 21.5676"
        fill="#DAC6A1"
      />
      <path
        d="M12.5334 20.5448C12.6129 20.5362 12.6885 20.5058 12.7519 20.4569L12.9268 20.3029C12.9361 20.2946 12.9435 20.2845 12.9486 20.2731C12.9537 20.2617 12.9563 20.2494 12.9563 20.2369C12.9563 20.2244 12.9537 20.2121 12.9486 20.2007C12.9435 20.1893 12.9361 20.1792 12.9268 20.1709C12.8548 20.111 12.8058 20.0279 12.7878 19.9356C12.7699 19.8434 12.7843 19.7478 12.8284 19.665C12.8389 19.6447 12.8444 19.622 12.8444 19.599C12.8444 19.5761 12.8389 19.5534 12.8284 19.5331H12.7519C12.6918 19.5559 12.6363 19.5894 12.588 19.632C12.4691 19.7035 12.3762 19.8116 12.323 19.9403C12.2699 20.0691 12.2594 20.2116 12.293 20.3469C12.293 20.4899 12.3914 20.5558 12.5116 20.5558L12.5334 20.5448Z"
        fill="#DAC6A1"
      />
      <path
        d="M11.255 21.7766H11.3206C11.2411 21.7084 11.1795 21.6216 11.1414 21.5237C11.1033 21.4259 11.0898 21.3201 11.1021 21.2157C11.1056 20.9601 11.0206 20.7112 10.8617 20.5118C10.8371 20.5366 10.8184 20.5667 10.807 20.5998C10.7878 20.6392 10.7778 20.6824 10.7778 20.7263C10.7778 20.7702 10.7878 20.8134 10.807 20.8528C10.8504 20.9121 10.8806 20.9801 10.8956 21.0522C10.9107 21.1243 10.9103 21.1988 10.8945 21.2707C10.8945 21.5896 10.9709 21.7656 11.255 21.8096"
        fill="#DAC6A1"
      />
      <path
        d="M11.6921 21.6226H11.7576C11.856 21.6226 11.856 21.5566 11.856 21.5566C11.856 21.5566 11.856 21.5566 11.8013 21.5016C11.6946 21.4386 11.6112 21.3422 11.5638 21.227C11.5165 21.1119 11.5078 20.9843 11.5391 20.8638C11.5672 20.7849 11.5749 20.7001 11.5615 20.6174C11.5481 20.5347 11.5141 20.4567 11.4626 20.3909C11.4102 20.3299 11.3738 20.2567 11.3566 20.178C11.3394 20.0992 11.3421 20.0174 11.3643 19.94H11.255C11.219 19.9574 11.1869 19.9819 11.1606 20.0122C11.1343 20.0424 11.1144 20.0777 11.1021 20.1159C11.0814 20.2917 11.1283 20.4688 11.2332 20.6108C11.2801 20.6639 11.3136 20.7277 11.3307 20.7966C11.3478 20.8656 11.3481 20.9377 11.3315 21.0067C11.3209 21.0997 11.33 21.1938 11.3582 21.2829C11.3865 21.372 11.4332 21.4541 11.4954 21.5236C11.5197 21.5556 11.5512 21.5812 11.5873 21.5984C11.6234 21.6156 11.6631 21.6239 11.703 21.6226"
        fill="#DAC6A1"
      />
      <path
        d="M12.3258 19.588V19.5221H12.151C12.0548 19.5163 11.9588 19.5344 11.8712 19.5747C11.7835 19.6149 11.7071 19.6762 11.6484 19.753C11.6092 19.8256 11.5886 19.9069 11.5886 19.9895C11.5886 20.0721 11.6092 20.1533 11.6484 20.2259C11.6903 20.2915 11.7125 20.3679 11.7125 20.4459C11.7125 20.5239 11.6903 20.6002 11.6484 20.6658C11.6154 20.7411 11.6003 20.8231 11.6045 20.9053C11.6086 20.9875 11.6317 21.0676 11.6721 21.1392C11.7124 21.2108 11.7688 21.2719 11.8368 21.3177C11.9048 21.3634 11.9824 21.3925 12.0636 21.4027H12.1838C12.1582 21.38 12.1377 21.352 12.1237 21.3207C12.1096 21.2895 12.1024 21.2555 12.1024 21.2212C12.1024 21.1869 12.1096 21.1529 12.1237 21.1216C12.1377 21.0904 12.1582 21.0624 12.1838 21.0397C12.2156 21.0195 12.239 20.9882 12.2493 20.9518C12.2493 20.9518 12.2493 20.8638 12.1619 20.8088C12.0923 20.7321 12.0392 20.6417 12.0062 20.5433C11.9732 20.4448 11.961 20.3406 11.9702 20.2371C11.9795 20.1336 12.01 20.0332 12.06 19.9423C12.1099 19.8514 12.1781 19.7719 12.2602 19.709"
        fill="#DAC6A1"
      />
      <path
        d="M14.1505 21.6336C14.2679 21.483 14.4279 21.3718 14.6094 21.3147C14.8092 21.2201 14.9877 21.0854 15.1339 20.9188C15.2249 20.7364 15.2518 20.5283 15.2101 20.3285C15.1685 20.1287 15.0607 19.9491 14.9044 19.819C14.8723 19.8095 14.8382 19.8095 14.8061 19.819C14.7821 19.8189 14.7586 19.8249 14.7376 19.8365C14.7165 19.848 14.6988 19.8647 14.6859 19.885C14.6696 19.9174 14.6611 19.9532 14.6611 19.9895C14.6611 20.0258 14.6696 20.0616 14.6859 20.0939L14.8607 20.4019C14.8862 20.4482 14.9016 20.4994 14.906 20.5522C14.9103 20.6049 14.9035 20.658 14.8859 20.7079C14.8684 20.7578 14.8405 20.8034 14.8041 20.8416C14.7677 20.8799 14.7237 20.9099 14.675 20.9298C14.3624 21.0723 14.0775 21.2697 13.8336 21.5126C13.8084 21.5498 13.7761 21.5816 13.7386 21.6061C13.7011 21.6307 13.6591 21.6475 13.6151 21.6556C13.5457 21.6546 13.4793 21.6271 13.4294 21.5786L13.1016 21.2487C13.0853 21.2183 13.0768 21.1843 13.0768 21.1497C13.0768 21.1152 13.0853 21.0812 13.1016 21.0507C13.1128 21.0258 13.1314 21.005 13.1549 20.9912C13.1784 20.9774 13.2056 20.9713 13.2327 20.9737H13.331L13.5496 21.0727H13.6151C13.6151 21.0727 13.6151 21.0727 13.6697 21.0067C13.6755 20.9096 13.6499 20.8132 13.5967 20.7319C13.5435 20.6507 13.4657 20.5889 13.3747 20.5558H13.2108C13.0829 20.5656 12.9595 20.6082 12.8524 20.6794C12.7454 20.7506 12.6581 20.8481 12.599 20.9628C12.4351 21.2047 12.7738 21.4466 13.1234 21.6996C13.2218 21.7656 13.331 21.8646 13.4294 21.9415C13.4922 21.9789 13.564 21.9979 13.637 21.9965C13.6869 22.0112 13.74 22.0112 13.7899 21.9965C13.9467 21.922 14.0849 21.813 14.1942 21.6776"
        fill="#DAC6A1"
      />
      <path
        d="M15.0574 22.0405H15.1339C15.4101 22.0968 15.6756 22.1971 15.9206 22.3375C15.9297 22.3471 15.9408 22.3548 15.953 22.36C15.9652 22.3653 15.9783 22.368 15.9916 22.368C16.0049 22.368 16.018 22.3653 16.0302 22.36C16.0424 22.3548 16.0534 22.3471 16.0626 22.3375C16.0587 22.3174 16.051 22.2983 16.0397 22.2813C16.0284 22.2643 16.0139 22.2498 15.997 22.2385C15.6388 22.0023 15.2231 21.8692 14.7951 21.8536C14.6792 21.8367 14.5615 21.8367 14.4455 21.8536C14.3253 21.9195 14.2379 22.0185 14.2379 22.1065C14.2394 22.1372 14.2495 22.1668 14.2668 22.1921C14.2842 22.2174 14.3083 22.2372 14.3362 22.2495L15.1011 22.4474L15.6255 22.6784H15.6802C15.7154 22.6919 15.7543 22.6919 15.7894 22.6784V22.5904C15.5888 22.4483 15.3623 22.3474 15.1229 22.2935C14.959 22.2385 14.97 22.1835 14.97 22.1615C14.97 22.1395 14.97 22.0845 15.1011 22.0845"
        fill="#DAC6A1"
      />
      <path
        d="M15.4944 20.9957C15.3913 21.0664 15.3024 21.1559 15.2322 21.2597C15.2107 21.3062 15.1996 21.3569 15.1996 21.4082C15.1996 21.4594 15.2107 21.5101 15.2322 21.5566C15.3633 21.8316 15.9096 21.9745 16.1719 22.0405C16.2374 22.0405 16.303 22.0405 16.303 21.9745V21.9085C16.0451 21.8179 15.8102 21.6715 15.6146 21.4796C15.6146 21.3587 15.5491 21.2707 15.6146 21.2047C15.6802 21.1387 15.7348 21.1057 15.8659 21.0947C15.9853 21.0973 16.1034 21.1196 16.2156 21.1607H16.2702C16.2702 21.1607 16.2702 21.0947 16.2702 21.0617C16.1937 20.9878 16.0996 20.9348 15.997 20.9078C15.8259 20.8875 15.6536 20.9348 15.5163 21.0397"
        fill="#DAC6A1"
      />
      <path
        d="M15.9752 21.2487C15.9096 21.2487 15.8878 21.2487 15.8878 21.3037C15.8878 21.3587 15.8878 21.3917 15.8878 21.4247C16.1122 21.5567 16.3504 21.6637 16.598 21.7436C16.598 21.7436 16.6526 21.7436 16.6635 21.6776C16.6744 21.6613 16.6801 21.6422 16.6801 21.6226C16.6801 21.603 16.6744 21.5839 16.6635 21.5676C16.4467 21.4357 16.2158 21.3287 15.9752 21.2487Z"
        fill="#DAC6A1"
      />
      <path
        d="M16.1172 23.2723C16.2152 23.2842 16.3143 23.2842 16.4122 23.2723C16.7592 23.1266 17.1292 23.0446 17.5049 23.0303C17.5814 23.0303 17.636 23.0303 17.636 22.9423C17.636 22.8543 17.636 22.8324 17.5049 22.8214H17.341C17.0133 22.8449 16.69 22.9114 16.3795 23.0193H16.3139C16.297 23.028 16.2783 23.0325 16.2593 23.0325C16.2403 23.0325 16.2216 23.028 16.2046 23.0193C16.2046 22.9533 16.2046 22.8653 16.2702 22.7994C16.5665 22.4861 16.9456 22.2648 17.3628 22.1615C17.3773 22.1589 17.3911 22.1533 17.4034 22.1452C17.4157 22.1371 17.4263 22.1266 17.4345 22.1142C17.4426 22.1019 17.4482 22.0881 17.4509 22.0735C17.4537 22.0589 17.4534 22.044 17.4502 22.0295C17.4404 22.0005 17.4208 21.9759 17.3949 21.9599C17.369 21.9438 17.3383 21.9373 17.3082 21.9415C16.7622 22.0442 16.2789 22.3606 15.9643 22.8214C15.9193 22.8755 15.8895 22.9407 15.8779 23.0103C15.8664 23.0799 15.8736 23.1514 15.8987 23.2173C15.9259 23.2624 15.9645 23.2994 16.0106 23.3246C16.0566 23.3497 16.1085 23.362 16.1609 23.3602"
        fill="#DAC6A1"
      />
      <path
        d="M16.8274 22.4804C16.8274 22.4804 16.8274 22.5574 16.8274 22.5794C16.8274 22.6014 16.9149 22.6344 17.0132 22.6344C17.1847 22.6416 17.3538 22.5913 17.4939 22.4914V22.4254C17.4939 22.4254 17.4284 22.4254 17.2645 22.4254C17.1095 22.4158 16.9557 22.4584 16.8274 22.5464"
        fill="#DAC6A1"
      />
      <path
        d="M15.7457 20.2589C15.7292 20.2326 15.7205 20.2021 15.7205 20.1709C15.7205 20.1398 15.7292 20.1093 15.7457 20.0829C15.7457 20.017 15.855 20.006 15.9096 20.006C15.8464 19.9211 15.766 19.8507 15.6737 19.7995C15.5814 19.7483 15.4793 19.7175 15.3742 19.709C15.3742 19.709 15.3087 19.709 15.2978 19.709C15.2978 20.1269 15.5054 20.4129 16.008 20.6108H16.1063L15.7457 20.2589Z"
        fill="#DAC6A1"
      />
      <path
        d="M15.1229 18.3123C15.1038 18.4955 15.122 18.6808 15.1765 18.8566C15.231 19.0325 15.3206 19.1953 15.4398 19.3351C15.4884 19.3943 15.5482 19.4432 15.6157 19.4791C15.6833 19.515 15.7571 19.537 15.8331 19.5441C15.8613 19.5551 15.8925 19.5551 15.9206 19.5441C15.9503 19.47 15.9503 19.3872 15.9206 19.3131C15.8739 19.2201 15.7967 19.1463 15.702 19.1042C15.6945 19.1219 15.6825 19.1374 15.6671 19.1489C15.6518 19.1605 15.6337 19.1678 15.6146 19.1701C15.4944 19.1701 15.3742 18.9832 15.3633 18.7742C15.3881 18.6809 15.3772 18.5816 15.3327 18.4961C15.2881 18.4105 15.2133 18.3449 15.1229 18.3123Z"
        fill="#DAC6A1"
      />
      <path
        d="M16.3467 19.753C16.2971 19.6937 16.2331 19.6482 16.1609 19.621V19.676C16.1754 20.037 16.2634 20.3912 16.4194 20.7165C16.5754 21.0419 16.7961 21.3316 17.0678 21.5676C17.1179 21.5812 17.1707 21.5812 17.2208 21.5676C17.3847 21.5676 17.4393 21.3917 17.4612 21.3367C17.491 21.1 17.4531 20.8596 17.3519 20.6438C17.3367 20.6224 17.3171 20.6045 17.2945 20.5912C17.2719 20.578 17.2468 20.5697 17.2208 20.5668C17.2208 20.5668 17.1552 20.5668 17.1552 20.5668V20.9298C17.168 20.9728 17.168 21.0187 17.1552 21.0617H17.1006C17.0482 21.0611 16.9978 21.0416 16.9586 21.0067C16.6537 20.687 16.4817 20.2621 16.4778 19.819C16.4754 19.7429 16.4486 19.6695 16.4013 19.61"
        fill="#DAC6A1"
      />
      <path
        d="M18.2151 23.2723C18.2879 23.3037 18.3655 23.3223 18.4445 23.3272C18.4829 23.3286 18.5211 23.3203 18.5554 23.303C18.5898 23.2857 18.6193 23.26 18.6412 23.2283C18.7635 22.9752 18.7906 22.6861 18.7177 22.4144C18.6844 22.3361 18.6362 22.2651 18.5757 22.2055C18.5731 22.2348 18.5731 22.2642 18.5757 22.2935V22.7664C18.5757 22.8983 18.5757 22.9533 18.4555 22.9643C18.4032 22.9551 18.3543 22.9323 18.3134 22.8983C18.0747 22.4295 17.9582 21.9073 17.9747 21.3807C17.9747 21.1937 17.8545 21.0837 17.789 21.0837C17.7234 21.0837 17.7343 21.0837 17.7343 21.2157C17.688 21.5793 17.7145 21.9486 17.812 22.3017C17.9096 22.6549 18.0764 22.9849 18.3025 23.2723H18.2151Z"
        fill="#DAC6A1"
      />
      <path
        d="M18.2479 22.4144C18.2636 22.3531 18.2636 22.2888 18.2479 22.2275L18.1932 21.8426C18.1833 21.8202 18.1682 21.8006 18.1492 21.7853C18.1302 21.77 18.1078 21.7594 18.084 21.7546C18.084 21.7546 18.0184 21.7546 18.0075 21.8316C17.9872 21.9234 17.9855 22.0185 18.0024 22.111C18.0193 22.2036 18.0545 22.2918 18.1058 22.3705H18.1823"
        fill="#DAC6A1"
      />
      <path
        d="M16.9039 20.7318C16.9039 20.7318 16.9586 20.6328 16.9586 20.6218C16.9619 20.5228 16.931 20.4256 16.8711 20.3469C16.8711 20.2919 16.8056 20.2919 16.7947 20.2919V20.3469C16.7736 20.3954 16.7627 20.4479 16.7627 20.5009C16.7627 20.5538 16.7736 20.6063 16.7947 20.6548C16.8052 20.6757 16.8207 20.6936 16.8398 20.707C16.8588 20.7204 16.8808 20.729 16.9039 20.7318Z"
        fill="#DAC6A1"
      />
      <path
        d="M19.7775 7.46867H19.6574C19.6574 7.46867 19.6574 7.55665 19.8212 7.55665C19.9613 7.5272 20.1073 7.55001 20.2319 7.62082C20.3565 7.69163 20.4513 7.80563 20.4987 7.94157C20.5179 7.975 20.528 8.01293 20.528 8.05154C20.528 8.09015 20.5179 8.12808 20.4987 8.16152C20.4987 8.16152 20.4222 8.2385 20.302 8.2385V8.31549C20.358 8.35002 20.4221 8.36899 20.4878 8.37047C20.5261 8.37187 20.5643 8.36354 20.5986 8.34624C20.633 8.32895 20.6625 8.30325 20.6844 8.27149C20.7094 8.22803 20.7225 8.17872 20.7225 8.12853C20.7225 8.07833 20.7094 8.02902 20.6844 7.98556C20.6184 7.79737 20.4901 7.6378 20.3209 7.53365C20.1518 7.42951 19.9522 7.38714 19.7557 7.41368"
        fill="#DAC6A1"
      />
      <path
        d="M20.1818 8.05154C20.1818 8.05154 20.2364 8.05154 20.2364 7.97456C20.2364 7.89758 20.1818 7.7876 20.0179 7.7766C20.0179 7.7766 20.0179 7.7766 20.0944 7.94157C20.11 7.9873 20.1409 8.02617 20.1818 8.05154Z"
        fill="#DAC6A1"
      />
      <path
        d="M20.4003 8.74439C20.3894 8.74281 20.3783 8.74362 20.3677 8.74677C20.3571 8.74992 20.3473 8.75534 20.339 8.76265C20.3307 8.76996 20.3241 8.779 20.3196 8.78914C20.3151 8.79927 20.3128 8.81027 20.3129 8.82138C20.3129 8.82138 20.3129 8.90936 20.3785 8.90936C20.75 8.90936 20.8811 9.14031 20.8811 9.6132C20.8811 9.83316 20.7391 9.82216 20.6626 9.82216C20.591 9.84128 20.5156 9.84128 20.444 9.82216C20.4279 9.81128 20.4089 9.80548 20.3894 9.80548C20.37 9.80548 20.351 9.81128 20.3348 9.82216C20.3348 9.82216 20.3348 9.82216 20.3348 9.88815C20.4705 10.0171 20.6507 10.0881 20.8374 10.0861C20.8871 10.1021 20.9406 10.1021 20.9904 10.0861C21.1324 9.97613 21.1652 9.77817 21.0996 9.44824C21.0968 9.35916 21.0764 9.27154 21.0396 9.19048C21.0028 9.10943 20.9503 9.03657 20.8852 8.97617C20.8201 8.91576 20.7437 8.86901 20.6605 8.83866C20.5772 8.80831 20.4888 8.79495 20.4003 8.79938"
        fill="#DAC6A1"
      />
      <path
        d="M20.5752 9.51423C20.5851 9.52002 20.5964 9.52307 20.6079 9.52307C20.6194 9.52307 20.6308 9.52002 20.6407 9.51423C20.652 9.47248 20.6529 9.42858 20.6434 9.38639C20.6339 9.3442 20.6142 9.30501 20.5861 9.27228C20.5392 9.2625 20.4909 9.2625 20.444 9.27228C20.3785 9.27228 20.3348 9.27228 20.3348 9.36026C20.3348 9.44824 20.3348 9.43724 20.3348 9.48123C20.393 9.53374 20.4651 9.56812 20.5424 9.58021"
        fill="#DAC6A1"
      />
      <path
        d="M20.6516 11.8347H20.7063C20.8626 11.7392 20.9982 11.6131 21.1052 11.4639C21.2122 11.3147 21.2883 11.1453 21.3291 10.9659C21.3441 10.888 21.3431 10.8078 21.3261 10.7302C21.3092 10.6527 21.2768 10.5795 21.2307 10.515C21.0832 10.3839 20.8921 10.3133 20.6954 10.3171H20.6298C20.5884 10.3136 20.5469 10.3221 20.5101 10.3416C20.4733 10.3611 20.4428 10.3907 20.4222 10.427C20.407 10.4659 20.407 10.5091 20.4222 10.548L20.7609 10.614C20.8009 10.6251 20.8381 10.6445 20.8701 10.671C20.9021 10.6976 20.9282 10.7306 20.9467 10.768C20.9766 10.931 20.9455 11.0995 20.8592 11.2409C20.6079 11.5378 20.4878 11.5598 20.5424 11.7467C20.597 11.9337 20.5424 11.8457 20.6079 11.8457"
        fill="#DAC6A1"
      />
      <path
        d="M20.4987 11.0979H20.6298C20.7609 11.0979 20.7718 11.0429 20.7718 11.0099C20.7718 10.9769 20.6626 10.8119 20.6298 10.8119H20.4768C20.4532 10.823 20.4328 10.8399 20.4175 10.861C20.4022 10.8822 20.3926 10.9069 20.3894 10.9329C20.3894 10.9329 20.3894 11.0209 20.4987 11.0539"
        fill="#DAC6A1"
      />
      <path
        d="M21.4602 6.77582H21.3946C21.6018 6.93733 21.8539 7.02962 22.1158 7.03976C22.169 7.05739 22.2264 7.05739 22.2797 7.03976C22.2905 7.00767 22.2905 6.97288 22.2797 6.94078C22.0382 6.52194 21.685 6.17947 21.2602 5.95208C20.8354 5.72469 20.3559 5.62146 19.8759 5.65406H19.417C19.417 5.65406 19.5699 5.81902 19.7448 5.83002L20.1818 5.85202C20.4609 5.82359 20.7428 5.86152 21.0047 5.96276C21.2666 6.064 21.5012 6.22571 21.6896 6.43489C21.7661 6.53387 21.788 6.62185 21.7552 6.68784C21.7224 6.75382 21.635 6.79781 21.493 6.79781"
        fill="#DAC6A1"
      />
      <path
        d="M20.8702 6.24793H20.6189C20.6189 6.24793 20.6189 6.24793 20.7172 6.34691C20.8256 6.36624 20.9366 6.36624 21.045 6.34691C21.1026 6.3594 21.1622 6.3594 21.2198 6.34691H21.2744C21.2744 6.34691 21.2744 6.34691 21.187 6.25893C21.0965 6.2447 21.0044 6.2447 20.9139 6.25893"
        fill="#DAC6A1"
      />
      <path
        d="M23.0117 6.48988C22.9261 6.47691 22.8462 6.43863 22.7823 6.3799C22.573 6.12965 22.2959 5.94621 21.9847 5.85202H21.8863C22.2729 6.38641 22.8272 6.77389 23.4597 6.95178H23.6017C23.6333 6.96462 23.6685 6.96462 23.7001 6.95178C23.7059 6.93979 23.7089 6.92663 23.7089 6.91329C23.7089 6.89995 23.7059 6.88679 23.7001 6.8748C23.6946 6.71529 23.637 6.56205 23.5363 6.43879C23.4356 6.31553 23.2973 6.22912 23.1428 6.19294C23.1428 6.32492 23.2084 6.4129 23.1428 6.47888C23.1104 6.52028 23.0635 6.54778 23.0117 6.55587"
        fill="#DAC6A1"
      />
      <path
        d="M24.0825 29.8048C24.1292 29.8161 24.1779 29.8161 24.2245 29.8048C24.1878 29.7903 24.1555 29.7664 24.1306 29.7356C24.1057 29.7048 24.0892 29.668 24.0825 29.6289C24.0825 29.5079 24.0825 29.3649 24.2573 29.2C25.1205 28.7491 25.35 28.3532 25.2735 27.6603C25.2793 27.6483 25.2823 27.6351 25.2823 27.6218C25.2823 27.6085 25.2793 27.5953 25.2735 27.5833C25.2506 27.5606 25.2231 27.543 25.193 27.5316C25.1629 27.5203 25.1308 27.5154 25.0987 27.5173C25.0478 27.5155 24.9976 27.5292 24.9547 27.5567C24.9118 27.5842 24.8781 27.6242 24.8583 27.6713C24.8249 28.0378 24.6575 28.3788 24.3884 28.6281C23.6545 29.0755 22.8201 29.329 21.9628 29.3649C21.7977 29.3521 21.6327 29.3905 21.4901 29.4751C21.3475 29.5597 21.234 29.6863 21.1652 29.8378L20.8702 30.5967C20.8619 30.6832 20.8211 30.7632 20.7561 30.8205C20.6911 30.8777 20.6068 30.9078 20.5205 30.9046L19.7775 30.8386C19.7405 30.8381 19.704 30.8301 19.6702 30.8149C19.6364 30.7998 19.606 30.7779 19.5809 30.7506C19.5674 30.7233 19.5604 30.6932 19.5604 30.6627C19.5604 30.6321 19.5674 30.602 19.5809 30.5747C19.5646 29.9528 19.6495 29.3324 19.8322 28.7381C19.8624 28.6454 19.8722 28.5472 19.8609 28.4503C19.8496 28.3535 19.8174 28.2603 19.7666 28.1772C19.7601 28.1608 19.7497 28.1463 19.7364 28.1348C19.7231 28.1233 19.7072 28.1152 19.6901 28.1112C19.6901 28.1112 19.6901 28.1112 19.6027 28.2322C19.2689 29.0387 19.1231 29.9115 19.1766 30.7836C19.1766 31.0146 19.2312 31.1466 19.4388 31.1905L20.9794 31.3115C21.2089 31.3115 21.3072 31.2235 21.3182 31.0366C21.3946 30.2447 21.6569 29.8378 22.083 29.8158L23.3067 29.6179H23.4051C23.4595 29.6088 23.5154 29.6141 23.5671 29.6334C23.6188 29.6527 23.6647 29.6853 23.7001 29.7279C23.8191 29.8122 23.9591 29.8617 24.1044 29.8708"
        fill="#DAC6A1"
      />
      <path
        d="M23.2412 27.1434H23.1756C22.9571 27.1434 22.9025 27.3304 22.9134 27.4294C22.9157 27.4793 22.9358 27.5267 22.9698 27.563C23.0039 27.5993 23.0498 27.6221 23.0991 27.6273C23.1385 27.6381 23.18 27.6381 23.2193 27.6273C23.353 27.4749 23.5219 27.3578 23.711 27.2864C23.5645 27.215 23.404 27.1774 23.2412 27.1764"
        fill="#DAC6A1"
      />
      <path
        d="M22.9025 28.6281H23.0117C23.1798 28.5787 23.331 28.4836 23.4488 28.3532C23.2402 28.3503 23.0335 28.3132 22.8369 28.2432H22.7823C22.7388 28.2432 22.6971 28.2606 22.6664 28.2915C22.6356 28.3224 22.6184 28.3644 22.6184 28.4081C22.6227 28.4708 22.6499 28.5296 22.6949 28.5731C22.7515 28.6249 22.826 28.6525 22.9025 28.6501"
        fill="#DAC6A1"
      />
      <path
        d="M22.2906 27.4623C22.3723 27.2753 22.4957 27.1098 22.6512 26.9785H22.52C22.3739 26.9819 22.2296 27.0117 22.0939 27.0664C21.9519 27.1544 21.8863 27.2754 21.9191 27.3854C21.9327 27.434 21.9611 27.4771 22.0003 27.5087C22.0395 27.5402 22.0875 27.5586 22.1376 27.5613C22.1684 27.5606 22.1984 27.5521 22.2251 27.5368C22.2518 27.5214 22.2743 27.4996 22.2906 27.4733"
        fill="#DAC6A1"
      />
      <path
        d="M20.4003 29.9368C20.4363 29.94 20.4722 29.9293 20.5006 29.9068C20.5291 29.8843 20.5479 29.8518 20.5533 29.8158C20.5644 29.6105 20.6326 29.4123 20.75 29.244C20.5728 29.2718 20.4066 29.3479 20.2692 29.4639C20.2249 29.5071 20.194 29.5623 20.1805 29.6229C20.1669 29.6835 20.1711 29.7467 20.1927 29.8048C20.2124 29.8436 20.242 29.8763 20.2785 29.8995C20.3151 29.9227 20.3571 29.9356 20.4003 29.9368Z"
        fill="#DAC6A1"
      />
      <path
        d="M26.978 29.3429C27.1941 29.2051 27.4434 29.1291 27.6991 29.123C27.5048 28.9505 27.2663 28.8362 27.0108 28.7931C26.4098 28.7931 26.5737 29.5299 27.0108 29.3429"
        fill="#DAC6A1"
      />
      <path
        d="M27.8302 28.3532C27.8383 28.1512 27.8866 27.953 27.9723 27.7703C27.7996 27.8055 27.6404 27.8894 27.5134 28.0122C27.4683 28.0549 27.4377 28.1109 27.4259 28.172C27.4141 28.2332 27.4218 28.2966 27.4478 28.3532C27.4667 28.3956 27.4974 28.4317 27.5361 28.457C27.5749 28.4824 27.6201 28.496 27.6663 28.4961C27.7057 28.4943 27.7432 28.4793 27.773 28.4533C27.8027 28.4274 27.8229 28.3921 27.8302 28.3532Z"
        fill="#DAC6A1"
      />
      <path
        d="M28.9229 28.0452H28.7808C28.6378 28.0445 28.4962 28.0745 28.3656 28.1332C28.2236 28.2212 28.158 28.3532 28.2017 28.4631C28.2132 28.5109 28.2396 28.5537 28.2769 28.5853C28.3142 28.617 28.3606 28.6358 28.4093 28.6391C28.4403 28.6394 28.4707 28.6314 28.4976 28.6159C28.5245 28.6005 28.5468 28.5781 28.5623 28.5511C28.637 28.3539 28.7612 28.1797 28.9229 28.0452Z"
        fill="#DAC6A1"
      />
      <path
        d="M28.2345 29.3539H28.3438C28.517 29.3019 28.6746 29.2074 28.8027 29.079C28.5865 29.0722 28.3726 29.0313 28.1689 28.958H28.1034C28.0809 28.958 28.0587 28.9626 28.038 28.9715C28.0174 28.9805 27.9988 28.9937 27.9835 29.0102C27.9681 29.0267 27.9562 29.0462 27.9487 29.0675C27.9411 29.0888 27.938 29.1114 27.9395 29.134C27.9382 29.1656 27.9445 29.1971 27.9578 29.2258C27.9711 29.2546 27.991 29.2796 28.016 29.299C28.0454 29.326 28.0799 29.3467 28.1174 29.3599C28.155 29.3732 28.1948 29.3786 28.2345 29.3759"
        fill="#DAC6A1"
      />
      <path
        d="M21.4274 28.4851C21.4429 28.5317 21.4721 28.5724 21.5111 28.6019C21.5502 28.6314 21.5972 28.6482 21.6459 28.6501C21.6976 28.6439 21.7471 28.6258 21.7907 28.5971C21.8343 28.5685 21.8708 28.5302 21.8972 28.4851C21.9807 28.3296 22.0257 28.156 22.0284 27.9792C21.8741 28.108 21.7008 28.2119 21.5148 28.2872C21.4804 28.3056 21.4531 28.3351 21.4373 28.371C21.4214 28.4069 21.418 28.447 21.4274 28.4851Z"
        fill="#DAC6A1"
      />
      <path
        d="M18.6194 27.0444C18.3762 27.0906 18.1541 27.2139 17.9856 27.3964C18.2362 27.3933 18.4825 27.4619 18.6958 27.5943C19.122 27.7593 19.2094 27.0334 18.6194 27.0444Z"
        fill="#DAC6A1"
      />
      <path
        d="M17.1115 26.5385C17.1547 26.5343 17.1952 26.5158 17.2268 26.486C17.2584 26.4561 17.2793 26.4166 17.2863 26.3736C17.2863 26.2526 17.2863 26.1316 17.1006 26.0437C16.9746 25.9976 16.8413 25.9752 16.7073 25.9777H16.5652C16.7317 26.0971 16.8667 26.2557 16.9586 26.4396C16.9761 26.4646 16.9989 26.4855 17.0253 26.5007C17.0517 26.5159 17.0812 26.5251 17.1115 26.5275"
        fill="#DAC6A1"
      />
      <path
        d="M16.2265 26.5056C16.2265 26.3846 16.15 26.2416 15.9096 26.2196C15.7394 26.222 15.5731 26.2715 15.4289 26.3626C15.6218 26.4139 15.801 26.5078 15.9533 26.6375C15.9923 26.6509 16.0346 26.6509 16.0735 26.6375C16.0951 26.6361 16.1161 26.6305 16.1355 26.6209C16.1548 26.6112 16.1721 26.5979 16.1863 26.5815C16.2005 26.5652 16.2114 26.5462 16.2183 26.5256C16.2252 26.505 16.228 26.4832 16.2265 26.4616"
        fill="#DAC6A1"
      />
      <path
        d="M16.4559 27.2534C16.2555 27.3874 16.0191 27.4564 15.7785 27.4514C15.9581 27.6205 16.1816 27.7349 16.4232 27.7813C17.0132 27.7813 16.8602 27.0884 16.4232 27.2534"
        fill="#DAC6A1"
      />
      <path
        d="M17.2645 27.2754C17.3219 27.2894 17.3819 27.2894 17.4393 27.2754C17.4675 27.2769 17.4957 27.2726 17.5221 27.2628C17.5486 27.2529 17.5728 27.2378 17.5932 27.2182C17.6137 27.1987 17.63 27.1751 17.6411 27.149C17.6522 27.1229 17.6579 27.0948 17.6578 27.0664C17.6594 27.0415 17.6557 27.0164 17.647 26.993C17.6382 26.9696 17.6246 26.9483 17.607 26.9306C17.5894 26.913 17.5683 26.8992 17.545 26.8904C17.5218 26.8816 17.4969 26.8779 17.4721 26.8795H17.2426C17.1229 26.8944 17.0018 26.8944 16.8821 26.8795C16.9769 27.034 17.1083 27.1625 17.2645 27.2534"
        fill="#DAC6A1"
      />
      <path
        d="M13.2436 26.3736C13.3058 26.4138 13.3774 26.4366 13.4512 26.4396C13.5044 26.4396 13.5556 26.4191 13.5943 26.3823C13.6329 26.3455 13.656 26.2951 13.6588 26.2416C13.6588 26.1866 13.6588 26.0547 13.4403 26.0437C13.264 26.0483 13.0888 26.0145 12.9268 25.9447C12.9918 26.1139 13.1013 26.2622 13.2436 26.3736Z"
        fill="#DAC6A1"
      />
      <path
        d="M11.7686 26.5166C11.8327 26.5361 11.9011 26.5361 11.9652 26.5166C12.0185 26.5166 12.0697 26.4961 12.1083 26.4593C12.1469 26.4224 12.17 26.3721 12.1728 26.3186C12.1743 26.294 12.171 26.2694 12.163 26.2462C12.155 26.2229 12.1425 26.2015 12.1263 26.1831C12.11 26.1647 12.0903 26.1497 12.0683 26.139C12.0463 26.1283 12.0224 26.122 11.998 26.1206H11.8778C11.7284 26.1253 11.5797 26.0991 11.4408 26.0437C11.5144 26.2079 11.6269 26.3514 11.7686 26.4616"
        fill="#DAC6A1"
      />
      <path
        d="M11.1458 25.1968H11.0474C10.9039 25.202 10.7628 25.2357 10.6322 25.2958C10.7525 25.3601 10.8629 25.4416 10.96 25.5378C10.9919 25.5746 11.0336 25.6013 11.0802 25.6147H11.1785C11.2284 25.6154 11.2768 25.5979 11.3149 25.5656C11.353 25.5333 11.3783 25.4883 11.3861 25.4388C11.3861 25.3178 11.3097 25.2188 11.1348 25.1748"
        fill="#DAC6A1"
      />
      <path
        d="M8.53438 23.5142C8.54232 23.5696 8.56995 23.6202 8.61215 23.6566C8.65435 23.693 8.70825 23.7127 8.76383 23.7122C8.78943 23.7131 8.81484 23.7075 8.83775 23.696C8.86066 23.6845 8.88033 23.6673 8.89495 23.6462C8.918 23.6001 8.93001 23.5493 8.93001 23.4977C8.93001 23.4461 8.918 23.3953 8.89495 23.3492C8.80911 23.1893 8.68523 23.0533 8.53438 22.9533C8.55742 23.088 8.55742 23.2256 8.53438 23.3602C8.53438 23.4702 8.53438 23.4922 8.53438 23.5032"
        fill="#DAC6A1"
      />
      <path
        d="M8.06455 22.9863C7.97494 22.8321 7.85164 22.7005 7.70398 22.6014C7.72154 22.7328 7.72154 22.8659 7.70398 22.9973C7.69368 23.0481 7.69368 23.1005 7.70398 23.1513C7.70951 23.2048 7.73531 23.254 7.77601 23.2888C7.81671 23.3237 7.86918 23.3414 7.92251 23.3382C7.9481 23.3392 7.97352 23.3336 7.99643 23.3221C8.01934 23.3106 8.039 23.2934 8.05362 23.2723C8.05362 23.2723 8.11918 23.1513 8.05362 22.9753"
        fill="#DAC6A1"
      />
      <path
        d="M7.94436 23.7342H7.86787C7.69763 23.7081 7.53421 23.6483 7.38712 23.5582C7.43117 23.7648 7.54272 23.9507 7.70398 24.0861C7.75658 24.1192 7.8168 24.1382 7.8788 24.1411C7.92612 24.1372 7.97092 24.118 8.0064 24.0862C8.04188 24.0545 8.06613 24.012 8.07547 23.9651C8.08561 23.9185 8.07767 23.8698 8.0533 23.8289C8.02893 23.788 7.98996 23.7581 7.94436 23.7452"
        fill="#DAC6A1"
      />
      <path
        d="M8.73105 24.7459C8.78717 24.7914 8.85585 24.8183 8.92772 24.8229C8.97313 24.8241 9.01752 24.8093 9.05338 24.7813C9.08923 24.7532 9.11432 24.7135 9.1244 24.669C9.13555 24.6223 9.12952 24.5732 9.10741 24.5307C9.08531 24.4883 9.04864 24.4553 9.00421 24.438H8.93865C8.7687 24.4039 8.60829 24.3326 8.46882 24.229C8.50297 24.4336 8.59388 24.6242 8.73105 24.7789"
        fill="#DAC6A1"
      />
      <path
        d="M19.4935 26.3296C19.5059 26.3059 19.5124 26.2794 19.5124 26.2526C19.5124 26.2258 19.5059 26.1994 19.4935 26.1756C19.4765 26.0074 19.4765 25.8379 19.4935 25.6697C19.4935 25.6697 19.4935 25.5598 19.2968 25.5268H19.1875C19.0301 25.5274 18.877 25.579 18.751 25.6741C18.625 25.7692 18.5329 25.9027 18.4882 26.0547C18.4371 26.2104 18.4383 26.3788 18.4916 26.5338C18.545 26.6888 18.6474 26.8218 18.7832 26.9125H18.8925C18.9069 26.8547 18.9069 26.7943 18.8925 26.7365C18.8724 26.6974 18.8619 26.6541 18.8619 26.61C18.8619 26.566 18.8724 26.5226 18.8925 26.4836C18.969 26.3846 19.111 26.3406 19.3733 26.3296H19.4935Z"
        fill="#DAC6A1"
      />
      <path
        d="M20.4222 28.2982C20.4768 28.2982 20.5315 28.2982 20.5424 28.2982C20.3894 28.1662 20.3129 28.0562 20.3129 27.9462C20.3129 27.8363 20.4113 27.7263 20.5424 27.6163C20.6735 27.5063 20.6407 27.4294 20.5424 27.3524C20.4064 27.2498 20.2945 27.1184 20.2146 26.9675C20.2005 26.9449 20.1813 26.9262 20.1584 26.9128C20.1356 26.8994 20.1099 26.8917 20.0835 26.8905C20.0116 26.8951 19.9429 26.922 19.8868 26.9675C19.7598 27.0671 19.6668 27.204 19.6205 27.3592C19.5743 27.5144 19.5772 27.6803 19.6289 27.8338C19.6805 27.9873 19.7783 28.1208 19.9087 28.2158C20.0391 28.3108 20.1956 28.3627 20.3566 28.3642"
        fill="#DAC6A1"
      />
      <path
        d="M25.645 28.1662C25.7242 28.1828 25.8061 28.1828 25.8853 28.1662C26.0272 28.1559 26.162 28.1001 26.2702 28.0071C26.3783 27.9141 26.454 27.7887 26.4863 27.6493C26.5385 27.4753 26.5314 27.2888 26.466 27.1194C26.4007 26.95 26.2809 26.8074 26.1257 26.7145C26.0836 26.6771 26.0289 26.6574 25.9728 26.6595C25.9492 26.6612 25.9262 26.6679 25.9055 26.6793C25.8847 26.6907 25.8667 26.7064 25.8526 26.7255C25.7558 26.8708 25.646 27.007 25.5248 27.1324C25.506 27.1782 25.506 27.2296 25.5248 27.2754C25.5352 27.3029 25.5513 27.328 25.572 27.3488C25.5927 27.3697 25.6176 27.3859 25.645 27.3964C25.707 27.424 25.7613 27.4666 25.8032 27.5202C25.8451 27.5739 25.8733 27.6371 25.8853 27.7043C25.8853 27.8363 25.8198 27.9572 25.6559 28.1112"
        fill="#DAC6A1"
      />
      <path
        d="M24.312 27.1324C24.4028 27.2132 24.5186 27.2599 24.6397 27.2644C24.7172 27.2628 24.7927 27.24 24.8583 27.1984C25.1996 27.0785 25.4816 26.8302 25.645 26.5056C25.663 26.4253 25.6625 26.3419 25.6436 26.2618C25.6247 26.1818 25.5878 26.1071 25.5357 26.0437C25.477 25.9626 25.3996 25.8972 25.3101 25.8531C25.2206 25.809 25.1218 25.7876 25.0222 25.7907H24.9348C24.779 25.7865 24.6263 25.7467 24.4881 25.6743C24.3499 25.6019 24.2299 25.4988 24.1371 25.3728C24.0169 25.2408 23.9186 25.1309 23.7984 25.1089H23.6782V25.1638C23.731 25.3662 23.8504 25.5446 24.0169 25.6697C24.2209 25.8094 24.4366 25.9308 24.6616 26.0327C24.7927 26.1206 24.8583 26.1976 24.8473 26.2856C24.8364 26.3736 24.7599 26.4726 24.607 26.5495H24.4868C24.3666 26.5495 24.2573 26.4726 24.159 26.3076C23.9542 25.9834 23.7081 25.6876 23.4269 25.4278H23.3614C23.333 25.4185 23.3024 25.4185 23.274 25.4278C23.175 25.4719 23.0914 25.5447 23.0336 25.6367C22.9789 25.7137 22.9352 25.7467 22.8806 25.7467C22.8254 25.7438 22.7722 25.7247 22.7276 25.6917H22.6512C22.2426 25.9153 21.8734 26.2051 21.5585 26.5495C21.5057 26.6019 21.4358 26.6331 21.3619 26.6375H21.2963C21.2908 26.5894 21.298 26.5407 21.3171 26.4963C21.3363 26.4518 21.3668 26.4133 21.4056 26.3846C21.7265 26.1814 22.0141 25.9291 22.2578 25.6367C22.2679 25.6045 22.2679 25.57 22.2578 25.5378C22.246 25.4844 22.2148 25.4373 22.1704 25.4058C22.0621 25.351 21.9419 25.3245 21.8208 25.3288C21.6908 25.3319 21.5619 25.3541 21.4383 25.3948C21.3148 25.4062 21.1904 25.4062 21.0668 25.3948C20.8598 25.3948 20.6538 25.3652 20.455 25.3068C20.4009 25.2961 20.3452 25.2961 20.2911 25.3068C20.2315 25.3035 20.1721 25.3173 20.1199 25.3465C20.0677 25.3757 20.0248 25.4191 19.9961 25.4718C19.9709 25.5366 19.9491 25.6027 19.9305 25.6697C19.8966 25.8551 19.8966 26.0452 19.9305 26.2306C19.9446 26.2936 19.9706 26.3534 20.007 26.4066C20.0199 26.4269 20.0377 26.4436 20.0587 26.4551C20.0797 26.4666 20.1032 26.4726 20.1272 26.4726C20.2009 26.4614 20.2715 26.4352 20.3348 26.3956C20.4282 26.3414 20.505 26.2626 20.557 26.1676C20.609 26.0726 20.6342 25.9651 20.6298 25.8567C20.6457 25.8152 20.6706 25.7779 20.7028 25.7475C20.7349 25.717 20.7735 25.6942 20.8155 25.6807C21.0303 25.603 21.2545 25.5549 21.482 25.5378H21.6896C21.7771 25.5378 21.8317 25.5928 21.8426 25.6477C21.8535 25.7027 21.788 25.7797 21.7334 25.8237C21.4492 26.0152 21.1404 26.1669 20.8155 26.2746C20.7141 26.3225 20.633 26.4054 20.5869 26.5083C20.5408 26.6111 20.5328 26.7272 20.5642 26.8355C20.5642 26.9785 20.7172 27.1434 21.0013 27.3524C21.0734 27.3974 21.1569 27.4203 21.2417 27.4184C21.3336 27.4103 21.4218 27.3775 21.4967 27.3233C21.5717 27.2691 21.6308 27.1956 21.6678 27.1104C21.6678 27.0114 21.7661 26.9345 21.941 26.8355C22.1695 26.6819 22.3786 26.501 22.5637 26.2966C22.5789 26.2795 22.5974 26.2659 22.6181 26.2564C22.6388 26.2469 22.6612 26.2419 22.6839 26.2416C22.7823 26.2416 22.8041 26.3296 22.826 26.4286V26.5275C22.8915 26.6265 22.9462 26.6705 23.0117 26.6705C23.0773 26.6705 23.1756 26.6045 23.274 26.4726C23.3176 26.4342 23.3702 26.4076 23.4269 26.3956H23.4597C23.4597 26.3956 23.4597 26.5056 23.4597 26.6155C23.4597 26.7255 23.4597 26.6925 23.4597 26.7145C23.477 26.7072 23.4956 26.7035 23.5143 26.7035C23.5331 26.7035 23.5517 26.7072 23.569 26.7145C23.6477 26.7182 23.7237 26.7449 23.7875 26.7915L24.312 27.1324Z"
        fill="#DAC6A1"
      />
      <path
        d="M20.3239 23.7012C20.3065 23.6939 20.288 23.6902 20.2692 23.6902C20.2505 23.6902 20.2319 23.6939 20.2146 23.7012C20.2036 23.737 20.2036 23.7753 20.2146 23.8111L20.9357 24.8009C20.9784 24.8543 21.0314 24.8984 21.0915 24.9305C21.1516 24.9627 21.2176 24.9822 21.2854 24.9879C21.3164 24.9869 21.347 24.9796 21.3752 24.9663C21.4033 24.9531 21.4286 24.9342 21.4493 24.9109C21.4723 24.8648 21.4843 24.814 21.4843 24.7624C21.4843 24.7109 21.4723 24.66 21.4493 24.614C21.4493 24.537 21.3946 24.504 21.3728 24.504V24.559C21.334 24.6059 21.2797 24.6372 21.2198 24.647C21.1868 24.644 21.1549 24.6336 21.1265 24.6165C21.0982 24.5993 21.074 24.5759 21.0559 24.548L20.444 23.7012C20.4274 23.6915 20.4086 23.6864 20.3894 23.6864C20.3702 23.6864 20.3514 23.6915 20.3348 23.7012"
        fill="#DAC6A1"
      />
      <path
        d="M22.5528 25.3398C22.5954 25.3541 22.6414 25.3541 22.6839 25.3398C22.7604 25.3398 22.8478 25.3398 22.8915 25.1199C22.9379 24.8293 22.9 24.5314 22.7823 24.262L22.2032 22.9643C22.2032 22.8763 22.1486 22.8653 22.1376 22.8653C22.1267 22.8653 22.1376 22.8653 22.0721 22.9753C22.052 23.0882 22.0552 23.2041 22.0815 23.3158C22.1078 23.4274 22.1567 23.5324 22.225 23.6242C22.3124 23.7671 22.3999 23.9321 22.4873 24.1081L22.5965 24.328C22.6261 24.3937 22.6414 24.4649 22.6414 24.537C22.6414 24.6091 22.6261 24.6803 22.5965 24.7459C22.5521 24.7992 22.49 24.8344 22.4217 24.8449C22.3414 24.8353 22.2675 24.7961 22.2141 24.7349L21.6459 23.8991C21.5409 23.6738 21.3585 23.4941 21.1324 23.3932H20.9794V23.4922C21.1433 23.7012 21.2854 23.9211 21.4165 24.1191C21.6565 24.6204 22.0361 25.0407 22.5091 25.3288"
        fill="#DAC6A1"
      />
      <path
        d="M21.7661 23.5362V23.6242L22.2032 24.383C22.2226 24.3818 22.2415 24.3762 22.2585 24.3667C22.2755 24.3572 22.2902 24.344 22.3015 24.328C22.3175 24.2855 22.3175 24.2386 22.3015 24.1961L21.8645 23.5252L21.7661 23.5362Z"
        fill="#DAC6A1"
      />
      <path
        d="M21.1324 24.394C21.1503 24.3928 21.1677 24.3871 21.183 24.3775C21.1982 24.368 21.2109 24.3547 21.2198 24.339C21.2304 24.3206 21.2359 24.2998 21.2359 24.2785C21.2359 24.2573 21.2304 24.2364 21.2198 24.2181L20.8592 23.6572V23.7342L21.1324 24.394Z"
        fill="#DAC6A1"
      />
      <path
        d="M23.5362 24.7349C23.5941 24.7438 23.6531 24.7438 23.711 24.7349C23.7357 24.7442 23.7628 24.7442 23.7875 24.7349C23.7971 24.7162 23.8021 24.6955 23.8021 24.6745C23.8021 24.6534 23.7971 24.6327 23.7875 24.614C23.7542 24.1051 23.6437 23.6044 23.4597 23.1293C23.398 22.9857 23.3575 22.8338 23.3395 22.6784C23.3519 22.6628 23.3587 22.6434 23.3587 22.6234C23.3587 22.6034 23.3519 22.584 23.3395 22.5684H23.274C23.2326 22.6521 23.211 22.7443 23.211 22.8378C23.211 22.9313 23.2326 23.0236 23.274 23.1073L23.569 23.8661C23.6127 23.9834 23.6127 24.0714 23.569 24.1301C23.5345 24.1279 23.5011 24.1165 23.4724 24.0972C23.4436 24.0779 23.4204 24.0513 23.4051 24.0201C23.2741 23.8063 23.192 23.5659 23.1647 23.3162C23.0773 23.0083 23.0008 22.9753 22.9243 22.9423H22.8369C22.9057 23.5865 23.2093 24.1821 23.6892 24.614"
        fill="#DAC6A1"
      />
      <path
        d="M22.3671 18.9832C22.3158 18.9993 22.2727 19.0348 22.2469 19.0822C22.2316 19.1187 22.2237 19.158 22.2237 19.1976C22.2237 19.2373 22.2316 19.2766 22.2469 19.3131C22.6409 20.0479 22.8297 20.8764 22.7932 21.7106C22.7932 21.9855 22.6293 21.9965 22.5965 21.9965C22.5506 21.9951 22.5059 21.981 22.4674 21.9558C22.4289 21.9306 22.398 21.8952 22.378 21.8536C22.1775 21.4983 21.9987 21.131 21.8426 20.7538C21.7115 20.4569 21.5695 20.1269 21.4274 19.863C21.4274 19.863 21.4274 19.863 21.3619 19.995C21.3375 20.1686 21.3681 20.3456 21.4493 20.5009C21.5804 20.7538 21.7115 21.0397 21.8098 21.2707C21.975 21.7438 22.2229 22.1833 22.5419 22.5684C22.6017 22.6147 22.6741 22.6415 22.7495 22.6454C22.8369 22.6454 22.9134 22.5794 22.9789 22.4474C23.171 21.2862 22.9831 20.0936 22.4436 19.0492C22.4436 19.0492 22.3889 19.0492 22.378 19.0492"
        fill="#DAC6A1"
      />
      <path
        d="M22.3671 21.3037C22.3671 21.3037 22.4326 21.3037 22.4436 21.1827C22.445 20.8625 22.3819 20.5453 22.2579 20.2504C22.134 19.9555 21.9518 19.689 21.7224 19.4671C21.694 19.4578 21.6634 19.4578 21.635 19.4671C21.625 19.4613 21.6137 19.4582 21.6022 19.4582C21.5907 19.4582 21.5794 19.4613 21.5695 19.4671C21.556 19.4905 21.549 19.517 21.549 19.5441C21.549 19.5711 21.556 19.5976 21.5695 19.621C21.9175 20.1187 22.1866 20.6678 22.3671 21.2487C22.3671 21.2487 22.3671 21.3037 22.4217 21.3037"
        fill="#DAC6A1"
      />
      <path
        d="M21.3509 23.1183C21.408 23.1348 21.4686 23.1348 21.5257 23.1183C21.5913 23.1183 21.7661 23.1183 21.8208 22.8214C21.8174 21.8956 21.5397 20.9919 21.0231 20.2259C21.0097 20.2097 20.993 20.1964 20.9742 20.187C20.9554 20.1775 20.9349 20.172 20.9139 20.1709C20.8519 20.1762 20.7938 20.2035 20.75 20.2479C20.7367 20.2871 20.7367 20.3297 20.75 20.3689C20.8466 20.6555 20.9635 20.9348 21.0996 21.2047V21.2597C21.2634 21.5883 21.3986 21.9305 21.5039 22.2825C21.527 22.3285 21.539 22.3794 21.539 22.4309C21.539 22.4825 21.527 22.5334 21.5039 22.5794C21.491 22.5997 21.4732 22.6164 21.4522 22.6279C21.4312 22.6395 21.4076 22.6455 21.3837 22.6454C21.3458 22.6442 21.3085 22.6347 21.2746 22.6177C21.2406 22.6006 21.2107 22.5763 21.187 22.5464C20.862 22.1845 20.5797 21.7859 20.3457 21.3587V21.2927C20.2189 21.0632 20.0765 20.8427 19.9196 20.6328C19.854 20.5558 19.7994 20.5228 19.7557 20.5228H19.6901C19.6718 20.5605 19.6623 20.6019 19.6623 20.6438C19.6623 20.6858 19.6718 20.7271 19.6901 20.7648C20.1131 21.6264 20.6953 22.399 21.4056 23.0413"
        fill="#DAC6A1"
      />
      <path
        d="M19.7775 20.1489V20.2149C20.2201 20.7563 20.5877 21.3557 20.8702 21.9965H20.9248C20.9369 21.9459 20.9369 21.8932 20.9248 21.8426C20.7752 21.1723 20.401 20.5742 19.865 20.1489H19.7775Z"
        fill="#DAC6A1"
      />
      <path
        d="M20.1818 23.3492C20.3566 23.3492 20.455 23.1953 20.455 22.9533C20.2861 22.1554 19.8597 21.4362 19.2422 20.9078C19.2043 20.8776 19.1589 20.8586 19.111 20.8528C19.519 21.3331 19.8846 21.8483 20.2037 22.3924C20.2334 22.4502 20.2489 22.5143 20.2489 22.5794C20.2489 22.6445 20.2334 22.7086 20.2037 22.7664C20.1845 22.7957 20.1586 22.82 20.1282 22.8372C20.0978 22.8545 20.0637 22.8641 20.0288 22.8653C19.9864 22.8653 19.9446 22.8554 19.9067 22.8363C19.8688 22.8172 19.8358 22.7895 19.8103 22.7554C19.2912 22.0271 18.7177 21.3396 18.0949 20.6988C18.0702 20.6686 18.0351 20.6489 17.9966 20.6438H17.931C17.9229 20.6629 17.9187 20.6835 17.9187 20.7043C17.9187 20.7251 17.9229 20.7457 17.931 20.7648C18.5872 21.4854 19.2037 22.2417 19.7775 23.0303C19.8717 23.1417 20.0046 23.2125 20.149 23.2283"
        fill="#DAC6A1"
      />
      <path
        d="M18.3462 20.4899C18.3308 20.5206 18.3228 20.5545 18.3228 20.5888C18.3228 20.6232 18.3308 20.6571 18.3462 20.6878L19.7557 22.4144H19.8431C19.855 22.375 19.855 22.3329 19.8431 22.2935L18.4227 20.4789L18.3462 20.4899Z"
        fill="#DAC6A1"
      />
      <path
        d="M24.0388 7.02876C24.2793 7.23631 24.5631 7.38667 24.8692 7.46867C24.8692 7.46867 24.9457 7.46867 24.9566 7.46867C24.9973 7.43176 25.0285 7.38546 25.0476 7.33374C25.0666 7.28202 25.0729 7.22643 25.0659 7.17173C25.0412 7.09752 24.9997 7.0301 24.9447 6.97476C24.8897 6.91942 24.8227 6.87767 24.749 6.8528C24.7538 6.92657 24.7346 6.99991 24.6944 7.06176C24.6456 7.10374 24.5837 7.1271 24.5196 7.12774C24.4535 7.13103 24.3886 7.10905 24.338 7.06622C24.2873 7.02339 24.2546 6.96287 24.2464 6.89679C24.2279 6.81212 24.1921 6.73224 24.1413 6.6622C24.0905 6.59216 24.0259 6.53348 23.9514 6.48988C24.0213 6.60503 24.0448 6.74277 24.0169 6.8748C23.9997 6.90489 23.9906 6.93903 23.9906 6.97378C23.9906 7.00852 23.9997 7.04266 24.0169 7.07275"
        fill="#DAC6A1"
      />
      <path
        d="M22.225 8.05154H22.0284V8.11753C22.1856 8.26811 22.3908 8.35773 22.6075 8.37047C22.6586 8.37233 22.7095 8.36122 22.7553 8.33816C22.8011 8.31511 22.8404 8.28084 22.8697 8.2385C22.9462 8.11753 22.8697 7.88658 22.7276 7.61164C22.7276 7.61164 22.7276 7.52366 22.4654 7.3037C22.4654 7.36969 22.3889 7.40268 22.2797 7.42468H21.7661C21.7757 7.46056 21.7952 7.49299 21.8222 7.51828C21.8493 7.54356 21.8828 7.56067 21.9191 7.56765C22.4436 7.56765 22.6293 7.74361 22.6293 7.89758C22.6293 8.05154 22.4873 8.13952 22.3015 8.13952"
        fill="#DAC6A1"
      />
      <path
        d="M22.4436 8.96434C22.8369 9.08532 22.9462 9.34926 22.9134 9.53622C22.9109 9.60648 22.8828 9.67336 22.8344 9.72408C22.786 9.7748 22.7208 9.8058 22.6512 9.81116C22.5387 9.80164 22.4337 9.75074 22.3562 9.66819C22.3362 9.72512 22.3362 9.78723 22.3562 9.84416C22.4267 9.98414 22.5304 10.1045 22.658 10.1947C22.7857 10.2848 22.9334 10.3419 23.0882 10.361C23.1285 10.3656 23.1693 10.3587 23.206 10.3412C23.2426 10.3237 23.2737 10.2963 23.2958 10.2621C23.3313 10.2002 23.35 10.13 23.35 10.0586C23.35 9.98718 23.3313 9.91701 23.2958 9.85515C23.1222 9.51577 23.0394 9.13676 23.0554 8.75539C23.0642 8.73645 23.0688 8.7158 23.0688 8.6949C23.0688 8.674 23.0642 8.65335 23.0554 8.63442L22.9352 8.6894C22.8616 8.72946 22.7785 8.74847 22.6949 8.74439C22.5395 8.74418 22.3876 8.69831 22.2578 8.61242L22.2032 8.66741C22.2032 8.66741 22.2032 8.66741 22.2032 8.74439L22.4436 8.96434Z"
        fill="#DAC6A1"
      />
      <path
        d="M21.0559 15.123C21.039 15.1611 21.0303 15.2023 21.0303 15.244C21.0303 15.2857 21.039 15.3269 21.0559 15.365C21.3244 15.7397 21.5725 16.1288 21.7989 16.5307V16.5857C21.9956 16.9156 22.1485 17.1796 22.2687 17.3555C22.3015 17.4059 22.3524 17.4414 22.4108 17.4545C22.4654 17.4545 22.52 17.3555 22.52 17.2346C22.3792 16.2021 21.9597 15.2283 21.3072 14.4192C21.2888 14.4489 21.2791 14.4831 21.2791 14.5181C21.2791 14.5531 21.2888 14.5874 21.3072 14.6171C21.6457 15.1024 21.9177 15.6314 22.1158 16.1898C22.1321 16.2222 22.1406 16.258 22.1406 16.2943C22.1406 16.3306 22.1321 16.3664 22.1158 16.3987C22.1158 16.3987 22.0065 16.3987 21.9628 16.2668C21.7555 15.8363 21.5067 15.4274 21.2198 15.046L21.0559 15.123Z"
        fill="#DAC6A1"
      />
      <path
        d="M20.3129 16.6187C20.3013 16.6119 20.2881 16.6084 20.2747 16.6084C20.2613 16.6084 20.2481 16.6119 20.2364 16.6187C20.2154 16.6575 20.2044 16.701 20.2044 16.7452C20.2044 16.7894 20.2154 16.8328 20.2364 16.8716C20.5439 17.5335 20.8905 18.1762 21.2744 18.7962C21.3221 18.8778 21.3888 18.9465 21.4688 18.9963C21.5487 19.0461 21.6395 19.0756 21.7333 19.0822C21.814 19.0793 21.8926 19.0555 21.9615 19.0131C22.0304 18.9707 22.0873 18.9112 22.1267 18.8402C22.2082 18.6685 22.2505 18.4806 22.2505 18.2903C22.2505 18.1 22.2082 17.9122 22.1267 17.7404C21.7964 17.0226 21.3936 16.3408 20.9248 15.7059C20.9112 15.6991 20.8963 15.6956 20.8811 15.6956C20.8659 15.6956 20.851 15.6991 20.8374 15.7059C20.8258 15.6991 20.8126 15.6956 20.7992 15.6956C20.7857 15.6956 20.7725 15.6991 20.7609 15.7059C20.7427 15.7416 20.7332 15.7812 20.7332 15.8214C20.7332 15.8615 20.7427 15.9011 20.7609 15.9368C21.2018 16.5782 21.5683 17.2682 21.8535 17.9934C21.8994 18.0796 21.9235 18.176 21.9235 18.2738C21.9235 18.3717 21.8994 18.468 21.8535 18.5543C21.8286 18.5956 21.7932 18.6296 21.751 18.6528C21.7088 18.6759 21.6612 18.6875 21.6132 18.6862C21.557 18.6867 21.5018 18.6715 21.4536 18.6424C21.4054 18.6133 21.3661 18.5714 21.34 18.5213C20.9715 17.953 20.6534 17.3531 20.3894 16.7287C20.3635 16.6999 20.329 16.6806 20.2911 16.6737"
        fill="#DAC6A1"
      />
      <path
        d="M20.4768 20.039C20.58 20.0364 20.6808 20.0066 20.769 19.9525C20.8572 19.8985 20.9298 19.8221 20.9794 19.731C21.043 19.5969 21.0714 19.4487 21.0618 19.3004C21.0523 19.1522 21.0051 19.0089 20.9248 18.8842C20.5838 18.3027 20.2949 17.6917 20.0616 17.0586C20.0616 16.9596 19.9742 16.9046 19.9087 16.9046C19.8795 16.9105 19.8519 16.9224 19.8275 16.9394C19.8031 16.9564 19.7824 16.9783 19.7666 17.0036C19.7539 17.0232 19.7472 17.0462 19.7472 17.0696C19.7472 17.093 19.7539 17.1159 19.7666 17.1356C20.034 17.7915 20.3405 18.4305 20.6844 19.0492C20.7289 19.1219 20.7524 19.2057 20.7524 19.2911C20.7524 19.3765 20.7289 19.4603 20.6844 19.5331C20.6615 19.5802 20.6257 19.6197 20.5811 19.647C20.5366 19.6743 20.4852 19.6882 20.4331 19.687C20.3803 19.6723 20.3309 19.6473 20.2878 19.6133C20.2447 19.5793 20.2087 19.5371 20.1818 19.4891C19.9067 19.1468 19.6652 18.7785 19.4607 18.3893L19.3951 18.2793C19.2531 18.0484 19.111 17.7954 18.9581 17.5865C18.9434 17.5653 18.9238 17.5482 18.9009 17.5367C18.878 17.5251 18.8525 17.5196 18.827 17.5205C18.7961 17.5207 18.7661 17.5302 18.7407 17.5479C18.7154 17.5655 18.6959 17.5905 18.6849 17.6195C18.6689 17.6419 18.6603 17.6688 18.6603 17.6965C18.6603 17.7241 18.6689 17.751 18.6849 17.7734L19.9087 19.687C19.9693 19.7846 20.0529 19.8657 20.1519 19.9232C20.251 19.9807 20.3625 20.0129 20.4768 20.017"
        fill="#DAC6A1"
      />
      <path
        d="M19.2203 17.3775L20.1818 19.0492C20.1993 19.0777 20.2233 19.1015 20.2518 19.1188C20.2803 19.136 20.3125 19.1461 20.3457 19.1481C20.3457 19.1481 20.3457 19.0602 20.3457 18.8732L19.3733 17.0586C19.3733 17.0586 19.3733 17.0586 19.3077 17.0586V17.1466C19.3247 17.1889 19.3247 17.2362 19.3077 17.2785C19.2905 17.3086 19.2814 17.3428 19.2814 17.3775C19.2814 17.4123 19.2905 17.4464 19.3077 17.4765"
        fill="#DAC6A1"
      />
      <path
        d="M19.417 20.4679C19.4572 20.3799 19.478 20.2842 19.478 20.1874C19.478 20.0906 19.4572 19.9949 19.417 19.907C19.1446 19.2101 18.7769 18.5549 18.3243 17.9604L18.2479 17.8504C18.2213 17.8183 18.1878 17.7927 18.15 17.7755C18.1121 17.7584 18.0708 17.7501 18.0293 17.7514C17.9747 17.7514 17.931 17.7514 17.931 17.7514C17.9227 17.7764 17.9227 17.8035 17.931 17.8284C18.3525 18.4275 18.7182 19.0644 19.0236 19.731C19.0504 19.7798 19.0645 19.8347 19.0645 19.8905C19.0645 19.9463 19.0504 20.0011 19.0236 20.0499C19.0069 20.0886 18.9794 20.1216 18.9445 20.145C18.9097 20.1684 18.8689 20.1812 18.827 20.1819C18.7864 20.1803 18.7467 20.1695 18.7108 20.1505C18.6749 20.1315 18.6437 20.1046 18.6194 20.0719C18.0373 19.4363 17.5006 18.7601 17.0132 18.0484C16.9784 18.0133 16.9313 17.9935 16.8821 17.9934C16.8581 17.9933 16.8346 17.9993 16.8136 18.0108C16.7925 18.0224 16.7748 18.0391 16.7619 18.0594C16.7493 18.085 16.7428 18.1133 16.7428 18.1419C16.7428 18.1705 16.7493 18.1987 16.7619 18.2243C17.252 19.0126 17.8193 19.7495 18.4555 20.4239C18.5185 20.4866 18.5937 20.5356 18.6765 20.5678C18.7592 20.6 18.8476 20.6146 18.9362 20.6108C18.9955 20.6143 19.0548 20.6043 19.1097 20.5814C19.1646 20.5586 19.2136 20.5235 19.2531 20.4789"
        fill="#DAC6A1"
      />
      <path
        d="M17.341 17.7514C17.6357 18.44 18.0713 19.0583 18.6194 19.5661C18.6315 19.5712 18.6445 19.5738 18.6576 19.5738C18.6707 19.5738 18.6837 19.5712 18.6958 19.5661C18.6958 19.5661 18.6958 19.5001 18.6958 19.4341C18.2697 18.7632 17.8436 18.1474 17.4284 17.6195H17.3628C17.354 17.6384 17.3495 17.6591 17.3495 17.68C17.3495 17.7009 17.354 17.7215 17.3628 17.7404"
        fill="#DAC6A1"
      />
      <path
        d="M17.8217 20.4679C17.864 20.4839 17.9106 20.4839 17.9528 20.4679C17.9528 20.4679 17.9528 20.3909 17.9528 20.2479C17.5459 19.5058 17.0425 18.8215 16.4559 18.2133C16.4386 18.1916 16.4171 18.1736 16.3927 18.1604C16.3683 18.1472 16.3415 18.139 16.3139 18.1364C16.3074 18.1616 16.3074 18.1881 16.3139 18.2133C16.6417 18.6313 17.0241 19.1152 17.3082 19.5661C17.3245 19.5945 17.3331 19.6267 17.3331 19.6595C17.3331 19.6924 17.3245 19.7246 17.3082 19.753C17.252 19.7463 17.1989 19.7233 17.1552 19.687C16.6065 19.0481 16.0922 18.3799 15.6146 17.6855C15.6022 17.6672 15.586 17.6519 15.5671 17.6405C15.5483 17.6291 15.5272 17.6219 15.5054 17.6195C15.4748 17.6212 15.4451 17.63 15.4185 17.6453C15.392 17.6605 15.3693 17.6818 15.3524 17.7075C15.3387 17.7288 15.3315 17.7536 15.3315 17.7789C15.3315 17.8043 15.3387 17.8291 15.3524 17.8504L15.4507 17.9934C16.0735 18.9392 16.8602 20.1049 17.8436 20.4129L17.8217 20.4679Z"
        fill="#DAC6A1"
      />
      <path
        d="M19.8868 13.0775C19.8476 13.1361 19.8146 13.1988 19.7885 13.2644C19.7885 13.4844 19.7885 13.5394 19.7885 13.5504H19.865C20.0021 13.4468 20.1132 13.3122 20.1891 13.1575C20.265 13.0027 20.3037 12.8321 20.302 12.6595L20.1818 11.1419C20.1818 11.0429 20.1163 10.9879 20.0726 10.9879H19.9961C19.9723 11.0479 19.9723 11.1148 19.9961 11.1749V11.5048C19.9961 11.6808 19.9961 11.8457 19.9961 12.0107C19.9961 12.1757 19.9961 12.3406 19.9961 12.4946C20.0176 12.5867 20.0169 12.6827 19.9941 12.7745C19.9713 12.8664 19.927 12.9514 19.865 13.0225L19.8868 13.0775Z"
        fill="#DAC6A1"
      />
      <path
        d="M18.7505 11.7028C18.7076 11.7181 18.6723 11.7496 18.6521 11.7907C18.449 12.3954 18.3673 13.0346 18.4118 13.6713C18.4275 13.7733 18.4793 13.8661 18.5576 13.9328C18.6358 13.9995 18.7354 14.0355 18.8379 14.0343C19.0116 14.0122 19.1749 13.9388 19.3072 13.8233C19.4394 13.7078 19.5347 13.5554 19.5809 13.3854C19.7101 12.7266 19.7469 12.0529 19.6901 11.3838C19.6901 11.2628 19.6355 11.1859 19.5809 11.1859H19.5153C19.4781 11.2282 19.4586 11.2834 19.4607 11.3398C19.5301 11.9592 19.4819 12.5862 19.3186 13.1874C19.1657 13.4404 19.0127 13.5833 18.8816 13.5833C18.7505 13.5833 18.6958 13.5833 18.674 13.2974C18.666 12.7842 18.7136 12.2716 18.816 11.7687C18.816 11.7687 18.816 11.7028 18.7505 11.6588"
        fill="#DAC6A1"
      />
      <path
        d="M19.0892 13.0885C19.2154 12.5627 19.2377 12.0172 19.1547 11.4828C19.1547 11.4168 19.1547 11.3838 19.1547 11.3838C19.1347 11.3979 19.1176 11.4159 19.1045 11.4366C19.0914 11.4574 19.0825 11.4806 19.0783 11.5048L19.0127 13.0995C19.0127 13.1654 19.0127 13.1654 19.0673 13.1654C19.122 13.1654 19.1329 13.1654 19.1438 13.0885"
        fill="#DAC6A1"
      />
      <path
        d="M17.0678 14.0013C17.0275 14.0058 16.9867 13.9989 16.9501 13.9814C16.9134 13.964 16.8823 13.9365 16.8602 13.9023C16.8056 13.8143 16.8602 13.7043 16.8602 13.5174L17.188 12.3406C17.1997 12.3049 17.1997 12.2664 17.188 12.2306H17.1225C17.1225 12.2306 17.035 12.2306 17.0023 12.3516C16.9258 12.6266 16.8165 12.8905 16.7073 13.1764C16.598 13.4624 16.5652 13.5614 16.4778 13.8143C16.4406 13.9097 16.4406 14.0158 16.4778 14.1112C16.5539 14.1926 16.6479 14.2549 16.7523 14.2931C16.8567 14.3313 16.9685 14.3444 17.0787 14.3312C17.6688 14.2542 17.9747 14.0343 18.0075 13.6603L18.2479 12.0987C18.2663 12.049 18.2663 11.9943 18.2479 11.9447H18.1714C18.1714 11.9447 18.0621 11.9997 18.0293 12.1207L17.8327 13.3084C17.7453 13.8033 17.5049 14.0452 17.1115 14.0562"
        fill="#DAC6A1"
      />
      <path
        d="M17.636 11.9887C17.6063 11.9946 17.5791 12.0093 17.5577 12.0308C17.5363 12.0524 17.5217 12.0798 17.5158 12.1097C17.4665 12.5467 17.3899 12.9801 17.2863 13.4074C17.2754 13.4357 17.2754 13.4671 17.2863 13.4954H17.341C17.3956 13.4954 17.4502 13.4954 17.4939 13.3414C17.5829 12.9173 17.6413 12.4873 17.6688 12.0547C17.6688 11.9667 17.6688 11.9667 17.6688 11.9667"
        fill="#DAC6A1"
      />
      <path
        d="M15.3742 14.0452C15.4842 14.0965 15.6029 14.1263 15.7239 14.1332C15.8329 14.1261 15.938 14.0896 16.0283 14.0277C16.1186 13.9659 16.1908 13.8808 16.2374 13.7813L16.6745 12.5276C16.6745 12.4176 16.6745 12.3846 16.6745 12.3626C16.6745 12.3406 16.6745 12.3626 16.6198 12.3626C16.47 12.7994 16.276 13.2195 16.0407 13.6163C16.011 13.6665 15.9696 13.7087 15.9201 13.7394C15.8707 13.77 15.8146 13.7882 15.7567 13.7923C15.7129 13.793 15.6698 13.7822 15.6314 13.761C15.5931 13.7398 15.561 13.7089 15.5381 13.6713C15.5089 13.6253 15.4934 13.5719 15.4934 13.5174C15.4934 13.4628 15.5089 13.4094 15.5381 13.3634C15.7227 13.0081 15.8833 12.6407 16.0189 12.2636C16.0316 12.244 16.0383 12.2211 16.0383 12.1976C16.0383 12.1742 16.0316 12.1513 16.0189 12.1317C15.9994 12.134 15.9813 12.1429 15.9674 12.1568C15.9535 12.1708 15.9447 12.189 15.9424 12.2086C15.7715 12.628 15.5668 13.0325 15.3305 13.4184C15.2911 13.4734 15.263 13.5358 15.248 13.6019C15.233 13.668 15.2313 13.7365 15.2431 13.8033C15.2772 13.891 15.3438 13.962 15.4289 14.0013"
        fill="#DAC6A1"
      />
      <path
        d="M16.1828 12.3736C16.0806 12.7265 15.9376 13.0661 15.7567 13.3854C15.7492 13.3998 15.7447 13.4155 15.7434 13.4317C15.7422 13.4479 15.7441 13.4641 15.7492 13.4795C15.7543 13.4949 15.7625 13.5091 15.7731 13.5213C15.7838 13.5335 15.7968 13.5433 15.8113 13.5504C15.8317 13.5479 15.8512 13.5406 15.8683 13.5291C15.8853 13.5177 15.8995 13.5023 15.9096 13.4844C16.1245 13.1778 16.2733 12.8294 16.3467 12.4616C16.3498 12.4328 16.3442 12.4036 16.3306 12.3781C16.3169 12.3526 16.2959 12.3318 16.2702 12.3186C16.2702 12.3186 16.2702 12.3186 16.2046 12.3956"
        fill="#DAC6A1"
      />
      <path
        d="M15.4726 12.3186C15.4726 12.3186 15.4726 12.3186 15.4726 12.3736C15.3319 12.6561 15.1712 12.9281 14.9918 13.1874C14.9846 13.2049 14.9809 13.2235 14.9809 13.2424C14.9809 13.2613 14.9846 13.28 14.9918 13.2974H15.0902C15.3176 13.0432 15.4889 12.7433 15.5928 12.4176C15.5928 12.4176 15.5928 12.4176 15.5928 12.3186"
        fill="#DAC6A1"
      />
      <path
        d="M14.3581 13.5504C14.4015 13.623 14.4602 13.6853 14.5301 13.7328C14.5999 13.7803 14.6792 13.8118 14.7624 13.8253C14.7912 13.8228 14.8191 13.8135 14.8438 13.7983C14.8684 13.783 14.8892 13.7621 14.9044 13.7373V13.6603L14.7187 13.5504C14.6838 13.5213 14.6574 13.4833 14.6422 13.4404C14.6422 13.3571 14.669 13.2761 14.7187 13.2094C14.8958 13.0302 15.0466 12.8266 15.1666 12.6046C15.1811 12.5755 15.1886 12.5435 15.1886 12.5111C15.1886 12.4786 15.1811 12.4466 15.1666 12.4176C15.1666 12.4176 15.112 12.4176 15.0902 12.4946C14.8985 12.7773 14.6867 13.0456 14.4564 13.2974C14.3581 13.4294 14.3362 13.5174 14.3909 13.6053"
        fill="#DAC6A1"
      />
      <path
        d="M14.2488 14.0343C14.0748 14.2527 13.9487 14.5058 13.879 14.7769C13.8094 15.048 13.7976 15.3309 13.8446 15.6069C13.9127 15.857 14.0041 16.1 14.1177 16.3328C14.1938 16.4782 14.2595 16.6289 14.3144 16.7837C14.3997 17.0041 14.437 17.2403 14.4237 17.4765C14.4237 17.4765 14.4237 17.5865 14.6094 17.5865C14.693 17.5943 14.7771 17.5943 14.8607 17.5865C15.0198 17.5438 15.1566 17.4415 15.2431 17.3005C15.2675 17.2432 15.28 17.1815 15.28 17.1191C15.28 17.0567 15.2675 16.995 15.2431 16.9376C14.7187 15.7499 14.7187 15.002 15.1448 14.3862C15.1557 14.362 15.1613 14.3357 15.1613 14.3092C15.1613 14.2826 15.1557 14.2564 15.1448 14.2322C15.1346 14.212 15.1189 14.1951 15.0996 14.1834C15.0802 14.1718 15.0581 14.1658 15.0355 14.1662C15.0075 14.1666 14.9799 14.1738 14.9552 14.1872C14.9304 14.2006 14.9093 14.2198 14.8935 14.2432C14.7639 14.3753 14.6644 14.5343 14.6022 14.709C14.5399 14.8838 14.5163 15.0701 14.5329 15.255C14.5496 15.5255 14.6047 15.7921 14.6968 16.0468C14.7514 16.2338 14.817 16.4427 14.8607 16.6627C14.8801 16.694 14.8903 16.7302 14.8903 16.7672C14.8903 16.8041 14.8801 16.8403 14.8607 16.8716C14.8505 16.8918 14.8348 16.9087 14.8155 16.9204C14.7962 16.9321 14.774 16.938 14.7514 16.9376C14.7514 16.9376 14.6203 16.9376 14.5548 16.7397C14.4892 16.5417 14.4237 16.3438 14.369 16.1898C14.2594 15.9345 14.1894 15.6637 14.1614 15.387C14.1332 14.96 14.2615 14.5374 14.522 14.1992C14.522 14.1332 14.522 14.0782 14.522 14.0452C14.5082 14.0233 14.4886 14.0055 14.4655 13.9939C14.4424 13.9823 14.4166 13.9772 14.3909 13.9793C14.3611 13.9788 14.3317 13.9856 14.3051 13.999C14.2784 14.0124 14.2554 14.032 14.2379 14.0562"
        fill="#DAC6A1"
      />
      <path
        d="M15.2759 16.2338C15.3871 16.7627 15.6232 17.2569 15.9643 17.6745C16.0286 17.7347 16.1043 17.7814 16.1869 17.8116C16.2695 17.8418 16.3573 17.855 16.445 17.8504C16.5849 17.8591 16.7233 17.8174 16.8354 17.7328C16.9475 17.6481 17.026 17.5261 17.0569 17.3885C17.0675 17.246 17.045 17.1029 16.9913 16.9706C16.9576 16.9339 16.9282 16.8933 16.9039 16.8496C16.7236 16.1985 16.7236 15.5102 16.9039 14.8591C16.9145 14.8407 16.92 14.8198 16.92 14.7986C16.92 14.7773 16.9145 14.7565 16.9039 14.7381C16.8651 14.7238 16.8225 14.7238 16.7837 14.7381C16.7497 14.7372 16.7159 14.7447 16.6854 14.7601C16.6549 14.7754 16.6286 14.7981 16.6089 14.8261C16.377 15.5407 16.377 16.311 16.6089 17.0256C16.6263 17.0865 16.6304 17.1504 16.621 17.2131C16.6116 17.2757 16.5888 17.3356 16.5543 17.3885C16.5261 17.4223 16.491 17.4497 16.4514 17.4686C16.4119 17.4876 16.3687 17.4978 16.3248 17.4985C16.2681 17.5008 16.2118 17.4877 16.1619 17.4606C16.1119 17.4336 16.0701 17.3935 16.0407 17.3445C15.7524 16.9764 15.5695 16.5359 15.5118 16.0708C15.454 15.6056 15.5236 15.1334 15.713 14.7051C15.7342 14.6765 15.7457 14.6418 15.7457 14.6061C15.7457 14.5704 15.7342 14.5357 15.713 14.5071C15.7005 14.4897 15.6841 14.4756 15.6651 14.4661C15.646 14.4565 15.625 14.4517 15.6037 14.4522C15.5719 14.4541 15.5411 14.4642 15.5144 14.4815C15.4876 14.4988 15.4657 14.5228 15.4507 14.5511C15.3026 14.8225 15.2107 15.1213 15.1806 15.4294C15.1506 15.7375 15.183 16.0486 15.2759 16.3438"
        fill="#DAC6A1"
      />
      <path
        d="M16.3139 14.4412C16.2984 14.4342 16.2817 14.4306 16.2647 14.4306C16.2478 14.4306 16.231 14.4342 16.2156 14.4412C16.1842 14.4449 16.1545 14.4571 16.1295 14.4764C16.1045 14.4958 16.0851 14.5216 16.0735 14.5511C15.9222 14.9144 15.8526 15.3069 15.8696 15.7005C15.8866 16.094 15.9898 16.4789 16.1719 16.8276C16.1797 16.842 16.1907 16.8543 16.2039 16.8638C16.2172 16.8734 16.2323 16.8798 16.2483 16.8826C16.2693 16.8259 16.2693 16.7634 16.2483 16.7067C16.1131 16.379 16.0435 16.0277 16.0435 15.6729C16.0435 15.3181 16.1131 14.9668 16.2483 14.6391C16.2616 14.6218 16.2688 14.6005 16.2688 14.5786C16.2688 14.5567 16.2616 14.5355 16.2483 14.5181"
        fill="#DAC6A1"
      />
      <path
        d="M17.5049 14.6501H17.4175C17.382 14.6493 17.3473 14.6609 17.3194 14.683C17.2915 14.705 17.2721 14.7362 17.2645 14.7711C17.0773 15.4511 17.0773 16.1696 17.2645 16.8496C17.3071 17.0318 17.4108 17.1935 17.5581 17.3077C17.7054 17.4219 17.8872 17.4815 18.073 17.4765C18.2519 17.4766 18.4237 17.4066 18.5522 17.2814C18.6807 17.1562 18.7557 16.9856 18.7614 16.8056C18.6232 16.0626 18.5901 15.3035 18.6631 14.5511C18.6801 14.5088 18.6801 14.4615 18.6631 14.4192C18.6277 14.385 18.5809 14.3654 18.5319 14.3642C18.5035 14.3637 18.4758 14.3734 18.4538 14.3915C18.4318 14.4096 18.4169 14.435 18.4118 14.4632C18.2907 15.0525 18.2576 15.6566 18.3134 16.2558C18.3134 16.2558 18.3134 16.3438 18.3134 16.3987C18.3462 16.4732 18.3632 16.5537 18.3632 16.6352C18.3632 16.7166 18.3462 16.7972 18.3134 16.8716C18.2863 16.9075 18.2517 16.9369 18.212 16.9578C18.1724 16.9787 18.1287 16.9906 18.084 16.9926C18.0087 16.9853 17.9364 16.9594 17.8735 16.9172C17.8106 16.875 17.759 16.8178 17.7234 16.7507C17.4947 16.1235 17.4567 15.4421 17.6141 14.7931C17.6267 14.7537 17.6267 14.7114 17.6141 14.6721"
        fill="#DAC6A1"
      />
      <path
        d="M17.9966 14.4632C17.9966 14.4632 17.9091 14.4632 17.8873 14.5621C17.7742 15.1563 17.7485 15.764 17.8108 16.3657C17.8162 16.3988 17.8339 16.4285 17.8602 16.449C17.8866 16.4694 17.9197 16.479 17.9528 16.4757C18.0075 16.4757 18.073 16.4757 18.084 16.3218C18.0235 15.7294 18.0235 15.1324 18.084 14.5401L17.9966 14.4632Z"
        fill="#DAC6A1"
      />
      <path
        d="M19.7011 13.9133C19.665 14.0278 19.665 14.1507 19.7011 14.2652C19.894 14.7734 19.9796 15.3165 19.9524 15.8599C19.9403 15.9409 19.9013 16.0154 19.8418 16.0713C19.7823 16.1273 19.7057 16.1612 19.6246 16.1678C19.5584 16.1682 19.4938 16.147 19.4406 16.1073C19.3875 16.0676 19.3485 16.0117 19.3296 15.9478C19.2115 15.4549 19.1636 14.9476 19.1875 14.4412C19.1822 14.4042 19.1638 14.3705 19.1357 14.3462C19.1075 14.322 19.0716 14.3088 19.0346 14.3092C19.0028 14.2974 18.968 14.2974 18.9362 14.3092C18.9266 14.3259 18.9216 14.3449 18.9216 14.3642C18.9216 14.3835 18.9266 14.4024 18.9362 14.4192C18.8679 15.1217 18.9808 15.83 19.264 16.4757C19.3047 16.5304 19.3575 16.5747 19.4182 16.6052C19.4789 16.6358 19.5458 16.6517 19.6136 16.6517C19.865 16.6517 20.1272 16.4097 20.3129 16.0138C20.4326 15.2818 20.2725 14.5314 19.865 13.9133H19.7011Z"
        fill="#DAC6A1"
      />
      <path
        d="M19.5918 15.6179C19.5918 15.6179 19.6464 15.5409 19.6464 15.4969C19.5699 15.068 19.5153 14.6721 19.4716 14.2542C19.4716 14.1552 19.417 14.1332 19.3951 14.1332C19.3733 14.1332 19.3405 14.1332 19.3405 14.2212C19.3454 14.6818 19.4078 15.14 19.5262 15.5849L19.5918 15.6179Z"
        fill="#DAC6A1"
      />
      <path
        d="M20.597 13.2094C20.597 13.2094 20.597 13.2094 20.597 13.3084C20.5996 13.4685 20.6369 13.6262 20.7063 13.7703C20.7807 13.9326 20.8216 14.1085 20.8265 14.2872C20.8265 14.4192 20.7063 14.4412 20.6626 14.4412H20.5752C20.4331 14.4412 20.3348 14.1442 20.3129 14.0233C20.2911 13.9023 20.3894 13.8913 20.4113 13.9243C20.4331 13.9573 20.4878 14.0342 20.5096 14.0123C20.5315 13.9903 20.444 13.6383 20.444 13.6383C20.4236 13.6286 20.4012 13.6235 20.3785 13.6235C20.3558 13.6235 20.3334 13.6286 20.3129 13.6383C20.2532 13.6443 20.1964 13.6671 20.149 13.7043C20.0726 13.7043 20.0288 13.7923 20.0726 13.9353C20.1384 14.3408 20.3121 14.7208 20.5752 15.035C20.6067 15.0479 20.642 15.0479 20.6735 15.035C20.7391 15.035 20.7937 15.035 20.8592 14.9141C20.9954 14.6569 21.0496 14.3637 21.0144 14.0745C20.9792 13.7853 20.8563 13.5139 20.6626 13.2974C20.6626 13.2974 20.6079 13.2974 20.6079 13.2974"
        fill="#DAC6A1"
      />
      <path
        d="M21.2744 12.9455H21.2089C21.197 12.9397 21.1839 12.9366 21.1706 12.9366C21.1574 12.9366 21.1443 12.9397 21.1324 12.9455C21.1324 12.9455 21.1324 12.9455 21.1324 13.0225C21.175 13.098 21.2264 13.1681 21.2854 13.2314C21.4274 13.3964 21.6132 13.5943 21.3946 13.8143C21.34 13.8143 21.34 13.8143 21.3946 13.9463C21.4493 14.0782 21.493 14.0562 21.5585 14.0562C21.6171 14.053 21.6737 14.034 21.7224 14.0013L22.0065 13.6383V13.5614C22.0065 13.5614 22.0065 13.5614 21.9519 13.5614C21.8972 13.5614 21.6569 13.3854 21.5476 13.2424C21.4647 13.1215 21.3565 13.0201 21.2307 12.9455"
        fill="#DAC6A1"
      />
      <path
        d="M22.0611 12.9015C22.0219 12.9128 21.9802 12.9128 21.941 12.9015L21.6022 12.6376H21.5367C21.5367 12.6376 21.4602 12.6376 21.4383 12.7035C21.4297 12.7206 21.4252 12.7394 21.4252 12.7585C21.4252 12.7776 21.4297 12.7965 21.4383 12.8135C21.5841 13.0096 21.757 13.1837 21.9519 13.3304C21.9991 13.3764 22.0611 13.4037 22.1267 13.4074C22.1784 13.4036 22.2278 13.3845 22.2687 13.3524C22.3512 13.2423 22.4425 13.1393 22.5419 13.0445C22.7047 12.9203 22.8296 12.7526 22.9025 12.5606C22.9096 12.5206 22.9096 12.4796 22.9025 12.4396C22.9025 12.4396 22.9025 12.4396 22.7932 12.4396C22.5258 12.4047 22.2806 12.2715 22.1048 12.0657H22.0393C22.0148 12.0686 21.9913 12.077 21.9704 12.0903C21.9496 12.1037 21.9321 12.1215 21.9191 12.1427C21.9191 12.1427 21.9191 12.2086 21.9191 12.2526L22.2578 12.6046C22.282 12.6443 22.2947 12.69 22.2947 12.7365C22.2947 12.7831 22.282 12.8288 22.2578 12.8685C22.2355 12.9074 22.2038 12.9399 22.1656 12.963C22.1273 12.9861 22.0839 12.999 22.0393 13.0005"
        fill="#DAC6A1"
      />
      <path
        d="M22.7932 11.5598C22.7471 11.5572 22.7019 11.5451 22.6606 11.5243C22.6192 11.5035 22.5826 11.4744 22.5528 11.4388C22.5528 11.4388 22.5528 11.4388 22.4982 11.4388C22.4436 11.4388 22.4982 11.4388 22.4217 11.4388C22.3452 11.4388 22.2906 11.6918 22.3452 11.7577C22.4762 11.9315 22.6673 12.0492 22.8806 12.0877C22.9474 12.0804 23.0114 12.0565 23.0667 12.0181C23.122 11.9797 23.167 11.928 23.1975 11.8677C23.3207 11.605 23.3948 11.3217 23.416 11.0319C23.4302 10.9891 23.4302 10.9428 23.416 10.8999C23.416 10.8999 23.3395 10.8999 23.3067 10.8449H23.2412C23.0122 10.7334 22.796 10.5969 22.5965 10.438C22.5777 10.4842 22.5728 10.5349 22.5825 10.5838C22.5923 10.6327 22.6161 10.6777 22.6512 10.713L22.968 10.9769C23.0215 11.035 23.058 11.1068 23.0734 11.1844C23.0889 11.2621 23.0826 11.3425 23.0554 11.4168C23.0404 11.4575 23.0136 11.4928 22.9786 11.5183C22.9436 11.5437 22.9019 11.5582 22.8588 11.5598"
        fill="#DAC6A1"
      />
      <path
        d="M29.1632 27.2644C29.19 27.2156 29.2041 27.1607 29.2041 27.1049C29.2041 27.0492 29.19 26.9943 29.1632 26.9455C29.1632 26.8685 29.0977 26.8575 28.9447 26.8355C28.7917 26.8135 28.4858 26.8355 28.4749 26.3956V26.2526H28.4093C28.3176 26.2855 28.2341 26.3379 28.1643 26.4062C28.0945 26.4745 28.0402 26.5572 28.005 26.6485C27.9747 26.7234 27.9343 26.7937 27.8849 26.8575C27.7956 26.9441 27.6803 26.9982 27.5571 27.0114C27.415 27.0114 27.3058 26.9345 27.2074 26.7585C27.1091 26.5825 27.2074 26.6705 27.2074 26.6595L27.1309 26.7585C27.0555 26.8755 27.0281 27.0175 27.0545 27.1544C27.0842 27.3948 27.0343 27.6384 26.9124 27.8473C26.6174 28.3532 26.2896 28.6061 25.9072 28.6171H25.5794C25.5478 28.621 25.5181 28.6347 25.4946 28.6564C25.4711 28.6781 25.4549 28.7067 25.4483 28.7381C25.4483 28.8041 25.4483 28.87 25.4483 28.881C25.613 28.9404 25.7869 28.9701 25.9618 28.969C26.1556 28.9615 26.3448 28.9077 26.5139 28.8121C26.683 28.7165 26.8271 28.5818 26.9343 28.4191C27.3495 27.8363 27.863 27.0994 28.453 27.0884C28.5828 27.0793 28.7123 27.11 28.8245 27.1764C28.846 27.221 28.8783 27.2595 28.9184 27.2883C28.9585 27.3171 29.0051 27.3353 29.054 27.3414C29.0768 27.3433 29.0996 27.3379 29.1192 27.3261C29.1388 27.3142 29.1542 27.2965 29.1632 27.2754"
        fill="#DAC6A1"
      />
      <path
        d="M30.5727 29.057C30.509 29.0705 30.4429 29.0664 30.3813 29.0451C30.3198 29.0238 30.2651 28.9861 30.2231 28.936C30.1886 28.8758 30.1704 28.8076 30.1704 28.7381C30.1704 28.6686 30.1886 28.6003 30.2231 28.5401V28.4851H30.1248C29.8188 28.5401 29.7533 28.6391 29.7423 28.8151C29.7591 28.8792 29.7502 28.9474 29.7175 29.005C29.6848 29.0626 29.6309 29.105 29.5675 29.123C28.9115 29.467 28.1871 29.6587 27.4478 29.6839C26.8952 29.6767 26.3467 29.5877 25.8198 29.4199C25.5029 29.3319 25.2407 29.255 24.9675 29.2C24.6944 29.145 24.6507 29.266 24.6288 29.3429C24.6252 29.3663 24.6284 29.3902 24.6382 29.4117C24.6479 29.4332 24.6636 29.4513 24.6835 29.4639L25.3172 29.6839C25.4046 29.6839 25.6668 29.7609 25.6777 30.0138C25.6887 30.2667 25.8963 30.4537 26.082 30.4537H26.1585C26.1209 30.3622 26.1209 30.2593 26.1585 30.1678C26.166 30.1358 26.1843 30.1074 26.2101 30.0874C26.236 30.0674 26.2679 30.0569 26.3005 30.0578H26.4317C26.7914 30.1303 27.1574 30.1671 27.5243 30.1678C27.7623 30.1632 27.9997 30.1411 28.2345 30.1018H28.3219C28.3531 30.1021 28.3839 30.1091 28.4121 30.1224C28.4404 30.1357 28.4655 30.1549 28.4858 30.1788C28.6559 30.3226 28.8655 30.4108 29.0868 30.4317C29.187 30.4247 29.2825 30.3862 29.3599 30.3217C29.2506 30.3217 29.1632 30.2008 29.0977 30.0468C29.0321 29.8928 29.0977 29.8598 29.2506 29.8268C29.4936 29.7659 29.7208 29.6534 29.9172 29.4969C29.9476 29.4643 29.9852 29.4394 30.0269 29.4241C30.0687 29.4089 30.1134 29.4037 30.1575 29.4089C30.5837 29.4089 30.682 29.266 30.7038 29.178V29.079H30.529"
        fill="#DAC6A1"
      />
      <path
        d="M30.6711 27.5173C30.5862 27.6334 30.4762 27.7284 30.3493 27.7951C30.2224 27.8618 30.0821 27.8985 29.939 27.9023C29.8346 27.9252 29.7265 27.9252 29.6221 27.9023C29.5852 27.8729 29.5546 27.8363 29.5321 27.7947C29.5095 27.7532 29.4956 27.7074 29.491 27.6603C29.491 27.5063 29.6112 27.3304 29.8625 27.1104C29.9791 27.0093 30.1244 26.9477 30.2777 26.9345C30.3477 26.9308 30.4174 26.945 30.4805 26.9758C30.5435 27.0065 30.5978 27.0529 30.6383 27.1104C30.6775 27.181 30.6981 27.2605 30.6981 27.3414C30.6981 27.4222 30.6775 27.5018 30.6383 27.5723L30.6711 27.5173ZM30.1903 26.7035C30.0269 26.7066 29.8692 26.7647 29.7423 26.8685C29.1305 27.3854 28.9993 27.7813 29.3053 28.1882C29.4807 28.2931 29.6803 28.35 29.8844 28.3532C30.2618 28.322 30.6151 28.154 30.8787 27.8803C30.9511 27.7692 30.9896 27.6392 30.9896 27.5063C30.9896 27.3735 30.9511 27.2435 30.8787 27.1324C30.8106 27.0023 30.7084 26.8935 30.5832 26.8179C30.458 26.7423 30.3145 26.7027 30.1685 26.7035"
        fill="#DAC6A1"
      />
      <path
        d="M32.0696 27.2864C32.0696 27.1544 31.9931 27.1544 31.9494 27.1544H31.8839C31.7495 27.1831 31.6179 27.2236 31.4905 27.2754C31.4635 27.2781 31.4384 27.2909 31.4202 27.3112C31.4021 27.3316 31.3921 27.358 31.3922 27.3854C31.3839 27.4175 31.387 27.4516 31.401 27.4817C31.4149 27.5118 31.4389 27.5361 31.4687 27.5503C31.625 27.6052 31.7859 27.6457 31.9494 27.6713C31.9594 27.6771 31.9707 27.6801 31.9822 27.6801C31.9937 27.6801 32.005 27.6771 32.015 27.6713C32.015 27.6713 32.015 27.6713 32.015 27.5833C31.9932 27.493 31.9932 27.3987 32.015 27.3084"
        fill="#DAC6A1"
      />
      <path
        d="M31.8511 26.6705C31.7651 26.5765 31.6849 26.4773 31.6107 26.3736C31.6107 26.3736 31.5452 26.3076 31.5233 26.3076C31.5015 26.3076 31.4687 26.3076 31.4141 26.3736C31.2808 26.4686 31.1752 26.5977 31.1081 26.7475C31.0909 26.7816 31.0819 26.8192 31.0819 26.8575C31.0819 26.8957 31.0909 26.9334 31.1081 26.9675C31.1322 26.9925 31.1611 27.0122 31.193 27.0254C31.225 27.0387 31.2593 27.0452 31.2939 27.0444C31.471 27.0239 31.6383 26.9512 31.7746 26.8355C31.8293 26.7805 31.8293 26.7585 31.7746 26.7145"
        fill="#DAC6A1"
      />
      <path
        d="M31.0098 25.9007C30.9442 25.8457 30.9114 25.8347 30.8787 25.8347C30.8459 25.8347 30.8787 25.8347 30.7913 25.9117C30.7389 25.9974 30.6984 26.0899 30.6711 26.1866C30.6431 26.2572 30.6431 26.336 30.6711 26.4066C30.6711 26.4066 30.7475 26.4066 30.824 26.4066H30.9224C31.053 26.3604 31.1671 26.2762 31.2502 26.1646V26.1096C31.2318 26.0747 31.2056 26.0446 31.1737 26.0217C31.0968 25.9722 31.0238 25.9171 30.9551 25.8567"
        fill="#DAC6A1"
      />
      <path
        d="M32.4521 25.6477C32.401 25.6456 32.3507 25.6607 32.3092 25.6906C32.2676 25.7204 32.2372 25.7634 32.2226 25.8127C32.2271 25.9017 32.1998 25.9894 32.1457 26.06C32.0916 26.1306 32.0143 26.1794 31.9276 26.1976C31.8511 26.1976 31.9276 26.3516 31.9276 26.3516C31.9276 26.3516 32.0259 26.5385 32.1133 26.5275H32.1789C32.2212 26.4685 32.2771 26.4207 32.3418 26.3881C32.4065 26.3556 32.4781 26.3393 32.5504 26.3406H32.7361C32.7754 26.34 32.8135 26.3269 32.8449 26.3032C32.8763 26.2795 32.8994 26.2464 32.911 26.2086C32.934 26.1374 32.936 26.061 32.9166 25.9888C32.8972 25.9165 32.8572 25.8515 32.8017 25.8017C32.7645 25.7556 32.718 25.7181 32.6652 25.6915C32.6125 25.665 32.5547 25.6501 32.4958 25.6477"
        fill="#DAC6A1"
      />
      <path
        d="M16.4232 28.7601C16.4232 28.87 16.3576 28.947 16.1828 29.013C16.2406 29.0231 16.2998 29.0231 16.3576 29.013C16.5095 29.0022 16.6545 28.9446 16.7728 28.8481C16.9123 28.7338 17.0848 28.6682 17.2645 28.6611C17.3997 28.6673 17.5328 28.6971 17.6578 28.7491C17.8108 28.8151 17.8873 28.881 17.9091 28.969C17.914 29.0058 17.9096 29.0433 17.8962 29.0779C17.8828 29.1125 17.861 29.1432 17.8327 29.167H17.9966C18.2369 29.167 18.4118 29.024 18.521 28.7271C18.6433 28.5594 18.8219 28.4422 19.0236 28.3971C19.1239 28.284 19.1852 28.1413 19.1984 27.9902C19.1984 27.9902 19.1984 27.8913 19.1329 27.8583H19.0564C18.6201 28.1084 18.1271 28.241 17.6251 28.2432C16.6227 28.2171 15.6351 27.9929 14.7187 27.5833C14.5937 27.5296 14.4924 27.4318 14.4341 27.3083C14.3757 27.1847 14.3642 27.0439 14.4018 26.9125L14.7733 25.8127C14.8435 25.6482 14.9613 25.5088 15.1114 25.4126C15.2615 25.3165 15.4368 25.2681 15.6146 25.2738C16.5535 25.4003 17.4408 25.7803 18.1823 26.3736H18.2369C18.2599 26.3314 18.2719 26.2842 18.2719 26.2361C18.2719 26.1881 18.2599 26.1408 18.2369 26.0986L17.8217 25.7577C17.7666 25.715 17.7221 25.66 17.6918 25.597C17.6614 25.534 17.6461 25.4648 17.6469 25.3948C17.6469 25.0209 17.4612 24.9219 17.3082 24.8559C17.3063 24.8779 17.3063 24.8999 17.3082 24.9219V25.2188C17.2964 25.2526 17.2741 25.2815 17.2445 25.3014C17.2149 25.3212 17.1798 25.3308 17.1443 25.3288H16.9039C16.6977 25.3158 16.4973 25.2543 16.319 25.1493C16.1406 25.0442 15.9892 24.8985 15.8769 24.7239C15.7348 24.537 15.6365 24.405 15.3961 24.416H15.2868L15.407 24.526C15.44 24.5537 15.4654 24.5895 15.4807 24.63C15.496 24.6704 15.5007 24.7141 15.4944 24.7569C15.4944 24.8449 15.3961 24.9109 15.2431 24.9549C15.1677 24.9371 15.0891 24.9371 15.0137 24.9549H14.8389C14.7436 24.9488 14.6523 24.9144 14.5766 24.8559C14.4801 24.7883 14.3663 24.7501 14.2488 24.7459C14.191 24.7354 14.1318 24.7354 14.074 24.7459C14.1963 24.8096 14.2895 24.9183 14.3343 25.0494C14.3791 25.1805 14.3719 25.3239 14.3144 25.4498L13.8664 26.8245C13.8178 26.9928 13.8165 27.1713 13.8628 27.3403C13.9091 27.5092 14.0012 27.6619 14.1286 27.7813C14.4564 27.9023 14.5985 28.0232 14.6094 28.1552C14.6203 28.2872 14.5438 28.3312 14.3909 28.4191C14.4719 28.4617 14.5617 28.4843 14.6531 28.4851C14.7985 28.479 14.9358 28.4158 15.0355 28.3092C15.1322 28.2311 15.2505 28.185 15.3742 28.1772C15.4499 28.1615 15.528 28.1615 15.6037 28.1772C16.1063 28.3092 16.3467 28.4411 16.3576 28.5951"
        fill="#DAC6A1"
      />
      <path
        d="M13.9429 25.8677C13.9595 25.8668 13.9756 25.8612 13.9891 25.8514C14.0027 25.8417 14.0132 25.8283 14.0194 25.8127C14.0327 25.7954 14.0399 25.7741 14.0399 25.7522C14.0399 25.7303 14.0327 25.7091 14.0194 25.6917C13.8622 25.4177 13.6361 25.1901 13.3638 25.0319H13.2764C13.2645 25.026 13.2514 25.023 13.2382 25.023C13.2249 25.023 13.2118 25.026 13.1999 25.0319C13.1857 25.0509 13.1781 25.0741 13.1781 25.0979C13.1781 25.1217 13.1857 25.1448 13.1999 25.1638C13.4551 25.339 13.6772 25.5588 13.8555 25.8127L13.9429 25.8677Z"
        fill="#DAC6A1"
      />
      <path
        d="M9.5396 25.8567C9.5396 26.1866 9.5396 26.4946 9.23366 26.5385C9.34182 26.6072 9.4664 26.6452 9.59423 26.6485C9.68983 26.6436 9.78314 26.6173 9.86739 26.5715C9.88532 26.5513 9.90718 26.5351 9.93161 26.5237C9.95604 26.5124 9.98253 26.5062 10.0094 26.5056C10.0413 26.4947 10.0759 26.4947 10.1078 26.5056L11.0146 26.9345C11.1348 26.9895 11.1895 27.0444 11.2004 27.1214C11.2113 27.1984 11.2004 27.2644 11.0474 27.3414C11.1309 27.3753 11.2197 27.3939 11.3097 27.3964C11.4528 27.3844 11.5894 27.3309 11.703 27.2424C11.7254 27.2182 11.7524 27.1989 11.7825 27.1857C11.8126 27.1725 11.845 27.1656 11.8778 27.1654H12.4351C12.8038 27.1643 13.1709 27.1163 13.5277 27.0224C13.5778 26.9904 13.6171 26.9438 13.6405 26.8889C13.6639 26.8339 13.6703 26.7732 13.6588 26.7145C13.6457 26.723 13.6345 26.7343 13.626 26.7475H13.5605C13.2356 26.8532 12.8967 26.9088 12.5553 26.9125C11.7276 26.9037 10.9227 26.6388 10.2498 26.1536C10.075 26.0876 10.0094 25.9007 10.0641 25.5708C10.1838 25.1739 10.3724 24.8015 10.6213 24.471C10.6449 24.4342 10.6772 24.4038 10.7154 24.3827C10.7535 24.3616 10.7963 24.3503 10.8398 24.35H11.1021C11.3752 24.35 11.4189 24.24 11.4189 24.1411H11.2987C11.0955 24.1257 10.9049 24.0357 10.7633 23.8881C10.6865 23.786 10.5725 23.7188 10.4465 23.7012C10.4832 23.7321 10.5128 23.7708 10.533 23.8145C10.5533 23.8582 10.5638 23.9059 10.5638 23.9541C10.5638 24.0023 10.5533 24.05 10.533 24.0937C10.5128 24.1374 10.4832 24.1761 10.4465 24.2071C9.99233 24.6649 9.72361 25.2764 9.69257 25.9227"
        fill="#DAC6A1"
      />
      <path
        d="M11.8888 25.0979C11.8177 24.9564 11.7807 24.8 11.7807 24.6415C11.7807 24.4829 11.8177 24.3266 11.8888 24.1851C11.9244 24.1373 11.9706 24.0985 12.0237 24.0717C12.0768 24.045 12.1353 24.0311 12.1947 24.0311C12.2533 24.0289 12.3115 24.0408 12.3647 24.0656C12.4179 24.0905 12.4645 24.1276 12.5006 24.1741C12.5517 24.2551 12.5832 24.347 12.5927 24.4425C12.6021 24.538 12.5893 24.6343 12.5553 24.7239C12.4569 25.0649 12.3258 25.2298 12.1401 25.2408C12.0332 25.2308 11.9329 25.1842 11.856 25.1089L11.8888 25.0979ZM12.9486 24.8449C12.9849 24.7124 12.9909 24.5733 12.9663 24.4381C12.9417 24.3029 12.8871 24.1751 12.8066 24.0641C12.7354 23.9762 12.6452 23.9058 12.543 23.8582C12.4408 23.8106 12.3292 23.787 12.2165 23.7891C12.1374 23.7882 12.0589 23.8033 11.9857 23.8335C11.9125 23.8638 11.8461 23.9085 11.7904 23.9651C11.7014 24.0658 11.6356 24.1851 11.5979 24.3144C11.5601 24.4437 11.5512 24.5798 11.5719 24.7129C11.5828 25.0328 11.7158 25.3362 11.9434 25.5598C12.0339 25.574 12.126 25.574 12.2165 25.5598C12.5334 25.5598 12.7847 25.3068 12.9486 24.8009"
        fill="#DAC6A1"
      />
      <path
        d="M13.2436 23.8551C13.3863 23.831 13.519 23.7661 13.626 23.6682C13.6377 23.6504 13.6455 23.6303 13.6491 23.6093C13.6527 23.5883 13.6518 23.5668 13.6467 23.5461C13.6416 23.5254 13.6322 23.5061 13.6193 23.4892C13.6063 23.4724 13.59 23.4584 13.5714 23.4482L13.3529 23.2833H13.2873C13.2873 23.2833 13.1999 23.2833 13.1562 23.3822C13.083 23.4762 13.0444 23.5928 13.0469 23.7122C13.0469 23.8221 13.1234 23.8661 13.2218 23.8661L13.2436 23.8551Z"
        fill="#DAC6A1"
      />
      <path
        d="M12.8612 23.0413L12.588 22.9423H12.4678C12.4678 22.9423 12.4678 22.9423 12.4678 23.0633V23.4262C12.4678 23.5032 12.5553 23.5362 12.6099 23.5362C12.6696 23.5303 12.7265 23.5074 12.7738 23.4702L12.9377 23.2613C12.9488 23.2352 12.9545 23.2071 12.9545 23.1788C12.9545 23.1504 12.9488 23.1224 12.9377 23.0963C12.9377 23.0963 12.883 23.0963 12.8175 23.0303"
        fill="#DAC6A1"
      />
      <path
        d="M12.0854 22.9753H11.8013C11.7729 22.9661 11.7423 22.9661 11.7139 22.9753C11.6973 23.044 11.6973 23.1156 11.7139 23.1843C11.7686 23.3272 11.8997 23.5362 12.0199 23.5362C12.1401 23.5362 12.1182 23.5362 12.1619 23.4042C12.1794 23.3506 12.1794 23.2928 12.1619 23.2393V23.1183C12.1693 23.0873 12.1669 23.0549 12.1552 23.0253C12.1434 22.9958 12.1229 22.9706 12.0964 22.9533L12.0854 22.9753Z"
        fill="#DAC6A1"
      />
      <path
        d="M8.30493 25.3288H8.40326C8.60472 25.3946 8.81437 25.4317 9.02606 25.4388C9.09472 25.4511 9.16501 25.4511 9.23366 25.4388C9.26158 25.4311 9.28579 25.4135 9.30185 25.3892C9.31791 25.365 9.32474 25.3357 9.32107 25.3068C9.32107 25.2408 9.24459 25.2298 9.20088 25.2298C8.68009 25.1632 8.18153 24.9767 7.74384 24.6849C7.30615 24.3931 6.94108 24.0038 6.67691 23.5472C6.61058 23.444 6.5753 23.3237 6.5753 23.2008C6.5753 23.0779 6.61058 22.9576 6.67691 22.8543C6.90281 22.5377 7.20824 22.2872 7.56194 22.1285C7.66459 22.0669 7.7812 22.0328 7.90065 22.0295C8.03793 22.0285 8.17056 22.0795 8.27215 22.1725C8.86085 22.7129 9.29158 23.4051 9.51775 24.1741C9.51775 24.306 9.59423 24.372 9.64886 24.372C9.70349 24.372 9.75812 24.372 9.77998 24.2071L9.70349 23.8111C9.67992 23.7594 9.66772 23.7031 9.66772 23.6462C9.66772 23.5892 9.67992 23.533 9.70349 23.4812C9.96572 23.1403 9.98758 22.8763 9.70349 22.6454C9.61608 22.8763 9.51775 22.9863 9.40848 22.9973C9.29922 23.0083 9.23366 22.9203 9.15718 22.7774C8.9275 22.429 8.63907 22.1238 8.30493 21.8756C8.16288 21.7876 8.10825 21.6886 8.14103 21.6006C8.07547 21.1937 7.94436 21.1607 7.75861 21.1277C7.85695 21.4356 7.75861 21.6446 7.36526 21.7656C6.81864 21.9509 6.36697 22.3462 6.10874 22.8653C6.1108 22.9154 6.09977 22.9651 6.07676 23.0095C6.05375 23.0538 6.01957 23.0914 5.97762 23.1183C5.87459 23.1059 5.77854 23.0595 5.70447 22.9863V23.0413C5.69114 23.1453 5.71027 23.251 5.75921 23.3436C5.80815 23.4362 5.88447 23.5112 5.97762 23.5582C6.03575 23.5557 6.09305 23.5727 6.14053 23.6065C6.188 23.6404 6.22294 23.6891 6.23986 23.7452C6.3107 23.9111 6.41923 24.058 6.55672 24.1741C6.64413 24.262 6.67691 24.328 6.65505 24.394C6.6332 24.46 6.53487 24.515 6.33819 24.537C6.40619 24.6056 6.4886 24.658 6.57935 24.6903C6.67011 24.7227 6.76691 24.7342 6.86265 24.7239H6.95007C6.98636 24.7224 7.02258 24.7284 7.05644 24.7416C7.09029 24.7549 7.12104 24.7751 7.14674 24.8009L7.52916 25.0429C7.63842 25.0979 7.68213 25.1528 7.68213 25.2188C7.68213 25.2848 7.61657 25.3838 7.4636 25.4718C7.55522 25.5311 7.66071 25.5653 7.76954 25.5708C7.84181 25.5841 7.9163 25.5779 7.9854 25.5528C8.05451 25.5276 8.11575 25.4845 8.16288 25.4278C8.17959 25.3986 8.2034 25.3742 8.23208 25.3569C8.26076 25.3396 8.29335 25.3299 8.32678 25.3288"
        fill="#DAC6A1"
      />
      <path
        d="M6.23986 20.4679C6.32727 20.4679 6.53487 20.4679 6.66598 20.8418C6.7971 21.2157 6.80802 21.3697 6.73154 21.4906C6.70569 21.527 6.67107 21.5562 6.63093 21.5755C6.5908 21.5947 6.54646 21.6034 6.50209 21.6006H6.4256C6.27753 21.5319 6.1495 21.426 6.05383 21.2931C5.95815 21.1602 5.89805 21.0048 5.87929 20.8418C5.87925 20.7445 5.91688 20.651 5.9842 20.5812C6.05153 20.5114 6.14323 20.4707 6.23986 20.4679ZM5.70447 20.5668C5.65475 20.6735 5.62897 20.7899 5.62897 20.9078C5.62897 21.0256 5.65475 21.142 5.70447 21.2487C5.7869 21.4108 5.90257 21.5534 6.04383 21.6672C6.18509 21.7809 6.34874 21.8632 6.52394 21.9086H6.61135C6.70509 21.9145 6.79852 21.8927 6.88007 21.8457C6.96163 21.7988 7.02774 21.7289 7.07025 21.6446C7.13157 21.4755 7.15069 21.2937 7.12592 21.1154C7.10116 20.9371 7.03327 20.7676 6.92821 20.6218C6.85939 20.4985 6.76171 20.394 6.64365 20.3174C6.5256 20.2407 6.39074 20.1942 6.25078 20.1819C6.13193 20.1891 6.01726 20.2287 5.91908 20.2965C5.82091 20.3643 5.74294 20.4578 5.69354 20.5668"
        fill="#DAC6A1"
      />
      <path
        d="M6.36005 19.973C6.39644 19.9676 6.43112 19.9539 6.46143 19.9329C6.49174 19.912 6.51686 19.8843 6.53487 19.852C6.59032 19.7463 6.62378 19.6303 6.6332 19.5111C6.6332 19.4011 6.6332 19.3791 6.53487 19.3461C6.46667 19.3293 6.39546 19.3293 6.32727 19.3461C6.27677 19.336 6.2248 19.336 6.1743 19.3461C6.1743 19.3461 6.09781 19.4341 6.10874 19.5441C6.11967 19.654 6.23986 19.984 6.36005 19.984"
        fill="#DAC6A1"
      />
      <path
        d="M5.90114 20.028C5.96313 19.8727 5.96313 19.6993 5.90114 19.5441C5.90734 19.5151 5.90734 19.4851 5.90114 19.4561C5.85836 19.4432 5.8128 19.4432 5.77002 19.4561C5.70002 19.4589 5.63148 19.4771 5.56919 19.5094C5.50691 19.5417 5.45239 19.5873 5.40946 19.643C5.40946 19.643 5.40946 19.731 5.40946 19.797C5.5515 20.039 5.69354 20.1269 5.77002 20.1159C5.78331 20.1237 5.79839 20.1277 5.81373 20.1277C5.82907 20.1277 5.84415 20.1237 5.85743 20.1159"
        fill="#DAC6A1"
      />
      <path
        d="M5.22371 19.83C5.11445 19.83 4.96148 20.006 4.9287 20.1269C4.91883 20.1415 4.91356 20.1588 4.91356 20.1764C4.91356 20.1941 4.91883 20.2113 4.9287 20.2259C5.03599 20.3362 5.17994 20.4028 5.33297 20.4129C5.36304 20.4155 5.39323 20.4096 5.42022 20.3961C5.44721 20.3825 5.46996 20.3617 5.48594 20.3359C5.48594 20.2369 5.48594 20.0609 5.25649 19.863L5.22371 19.83Z"
        fill="#DAC6A1"
      />
      <path
        d="M5.11445 18.9392C5.16946 18.9472 5.21972 18.975 5.25589 19.0175C5.29206 19.0599 5.31169 19.1142 5.31112 19.1701C5.31112 19.2581 5.3876 19.3021 5.46409 19.2911C5.49213 19.2911 5.51954 19.2828 5.54288 19.2671C5.56621 19.2514 5.58442 19.2292 5.5952 19.2031C5.61776 19.1689 5.62978 19.1287 5.62978 19.0877C5.62978 19.0466 5.61776 19.0064 5.5952 18.9722C5.57076 18.9346 5.55774 18.8906 5.55774 18.8457C5.55774 18.8008 5.57076 18.7568 5.5952 18.7192C5.61731 18.6749 5.62882 18.6259 5.62882 18.5763C5.62882 18.5266 5.61731 18.4777 5.5952 18.4333C5.5676 18.4032 5.53365 18.3796 5.49584 18.3644C5.45803 18.3492 5.41731 18.3427 5.37668 18.3453C5.29221 18.3436 5.20907 18.3666 5.13733 18.4115C5.06558 18.4564 5.00829 18.5213 4.9724 18.5983C4.9724 18.7522 5.08167 18.8732 5.20186 18.9392"
        fill="#DAC6A1"
      />
      <path
        d="M13.3201 28.5401C13.261 28.5877 13.1882 28.6147 13.1125 28.6171C13.0517 28.6194 12.9916 28.604 12.9393 28.5728C12.887 28.5416 12.8447 28.4959 12.8175 28.4411C12.789 28.374 12.78 28.3001 12.7916 28.2281C12.8032 28.1561 12.8349 28.0888 12.883 28.0342C12.9087 28.0084 12.9395 27.9882 12.9733 27.9749C13.0072 27.9617 13.0434 27.9557 13.0797 27.9572C13.1441 27.9575 13.2071 27.9763 13.2613 28.0114C13.3155 28.0464 13.3586 28.0963 13.3857 28.1552C13.4123 28.219 13.4203 28.2891 13.4087 28.3573C13.3971 28.4255 13.3663 28.4889 13.3201 28.5401ZM13.6807 28.5401C13.7225 28.4298 13.7313 28.3096 13.7061 28.1943C13.6808 28.079 13.6226 27.9737 13.5386 27.8913C13.4838 27.8219 13.414 27.766 13.3344 27.7279C13.2549 27.6898 13.1678 27.6704 13.0797 27.6713C12.9739 27.6753 12.8707 27.7055 12.7792 27.7592C12.6877 27.8129 12.6108 27.8885 12.5553 27.9792C12.5048 28.096 12.4873 28.2245 12.5047 28.3506C12.522 28.4767 12.5735 28.5955 12.6536 28.6941C12.7193 28.7766 12.8054 28.8404 12.9032 28.879C13.001 28.9176 13.1072 28.9297 13.2111 28.9141C13.315 28.8985 13.4131 28.8558 13.4955 28.7902C13.5778 28.7246 13.6417 28.6383 13.6807 28.5401Z"
        fill="#DAC6A1"
      />
      <path
        d="M10.4246 30.7286C10.3673 30.7719 10.2993 30.7985 10.228 30.8056C10.1674 30.8066 10.1078 30.7906 10.0558 30.7596C10.0037 30.7285 9.96118 30.6835 9.93294 30.6297C9.90688 30.5621 9.89922 30.4888 9.91074 30.4172C9.92227 30.3457 9.95256 30.2786 9.9985 30.2228C10.0524 30.172 10.1216 30.141 10.1952 30.1348C10.2589 30.1381 10.3204 30.1595 10.3726 30.1964C10.4248 30.2334 10.4656 30.2845 10.4902 30.3437C10.5214 30.4066 10.5319 30.4778 10.5201 30.547C10.5083 30.6162 10.4748 30.6799 10.4246 30.7286ZM10.1952 29.8708C10.0907 29.868 9.98753 29.8942 9.89693 29.9466C9.80633 29.999 9.73184 30.0755 9.68164 30.1678C9.62995 30.2842 9.61176 30.413 9.62915 30.5394C9.64653 30.6657 9.69879 30.7846 9.77998 30.8826C9.83426 30.9534 9.90372 31.0109 9.98318 31.0509C10.0626 31.0909 10.15 31.1123 10.2389 31.1136C10.3556 31.1087 10.4685 31.0698 10.5636 31.0014C10.6587 30.933 10.7319 30.8382 10.7743 30.7286C10.8204 30.6199 10.8326 30.4995 10.8091 30.3837C10.7857 30.2678 10.7278 30.1618 10.6432 30.0798C10.5913 30.0106 10.5233 29.9554 10.4451 29.9189C10.367 29.8825 10.2812 29.866 10.1952 29.8708Z"
        fill="#DAC6A1"
      />
      <path
        d="M26.2022 33.2141C26.1384 33.2607 26.0624 33.2874 25.9837 33.2911C25.9164 33.2911 25.8503 33.2727 25.7925 33.2378C25.7348 33.2029 25.6876 33.1529 25.6559 33.0931C25.6264 33.0244 25.617 32.9486 25.6286 32.8746C25.6402 32.8006 25.6724 32.7315 25.7215 32.6752C25.7934 32.6183 25.8842 32.5911 25.9754 32.5991C26.0665 32.6071 26.1513 32.6497 26.2124 32.7182C26.2735 32.7867 26.3065 32.8761 26.3046 32.9682C26.3027 33.0603 26.2661 33.1482 26.2022 33.2141ZM25.9181 32.3013C25.8055 32.2998 25.6944 32.3286 25.5965 32.3846C25.4985 32.4407 25.4172 32.522 25.3609 32.6202C25.3093 32.7437 25.2932 32.8793 25.3145 33.0115C25.3357 33.1437 25.3934 33.2673 25.4811 33.3681C25.5463 33.4446 25.6266 33.5066 25.7168 33.5501C25.8071 33.5937 25.9055 33.6178 26.0055 33.621C26.1325 33.618 26.2558 33.5779 26.3605 33.5057C26.4653 33.4335 26.5469 33.3322 26.5956 33.2141C26.642 33.0974 26.6512 32.969 26.6218 32.8468C26.5925 32.7246 26.526 32.6147 26.4317 32.5323C26.368 32.4584 26.289 32.3995 26.2003 32.3596C26.1116 32.3197 26.0153 32.2998 25.9181 32.3013Z"
        fill="#DAC6A1"
      />
      <path
        d="M15.0137 30.2777C14.5142 29.9924 14.0848 29.5978 13.7571 29.123C13.7571 29.057 13.6697 29.013 13.6151 29.024C13.6032 29.0182 13.5901 29.0151 13.5769 29.0151C13.5636 29.0151 13.5505 29.0182 13.5386 29.024C13.5224 29.0544 13.5139 29.0884 13.5139 29.123C13.5139 29.1575 13.5224 29.1915 13.5386 29.222C13.6951 29.5108 13.9071 29.7655 14.1622 29.9713C14.4173 30.1771 14.7104 30.3298 15.0246 30.4207C15.0246 30.4207 15.1229 30.4207 15.1229 30.3657C15.1229 30.3107 15.1229 30.2777 15.0355 30.2338"
        fill="#DAC6A1"
      />
      <path
        d="M14.9372 32.6862C14.5406 32.5792 14.1342 32.5129 13.7244 32.4883C13.7017 32.4877 13.6795 32.4951 13.6615 32.5091C13.6436 32.5231 13.6311 32.543 13.626 32.5652C13.6251 32.5952 13.6343 32.6246 13.6522 32.6486C13.6701 32.6726 13.6955 32.6897 13.7244 32.6972C14.15 32.7933 14.5614 32.9449 14.9481 33.1481H15.0137C15.0137 33.1481 15.0137 33.1481 15.0137 33.0711V32.8072C15.0137 32.7302 15.0137 32.7192 14.9044 32.6752"
        fill="#DAC6A1"
      />
      <path
        d="M12.7519 32.0704C12.4337 32.0975 12.1354 32.2379 11.9106 32.4663C11.9106 32.4663 11.9106 32.5653 11.9106 32.5872C11.9106 32.6092 11.9106 32.5872 12.0199 32.5872C12.104 32.5846 12.1864 32.562 12.2602 32.5213C12.4262 32.3707 12.6381 32.2815 12.8612 32.2683H12.9486C13.1234 32.2683 13.1781 32.3893 13.1781 32.4773C13.1754 32.5231 13.1562 32.5663 13.124 32.5988C13.0917 32.6312 13.0488 32.6506 13.0032 32.6532C12.9717 32.6661 12.9364 32.6661 12.9049 32.6532C12.8663 32.6379 12.8233 32.6379 12.7847 32.6532H12.6864C12.5486 32.6953 12.4164 32.7545 12.293 32.8292H12.2056H12.151C12.151 32.8292 12.151 32.8292 12.2056 32.8292C12.4062 32.8985 12.6164 32.9356 12.8284 32.9392C12.9335 32.949 13.0394 32.9308 13.1353 32.8864C13.2312 32.842 13.3138 32.773 13.3747 32.6862C13.4121 32.6131 13.4316 32.532 13.4316 32.4498C13.4316 32.3675 13.4121 32.2865 13.3747 32.2133C13.3203 32.1246 13.2424 32.0529 13.1498 32.0063C13.0571 31.9597 12.9534 31.94 12.8503 31.9494"
        fill="#DAC6A1"
      />
      <path
        d="M8.16288 27.2754C8.16288 27.2754 8.04269 27.2754 8.04269 27.3524C8.04269 27.4294 8.18474 27.5283 8.42511 27.5723C8.57488 27.5582 8.72593 27.5753 8.86882 27.6226C9.01171 27.6699 9.14336 27.7464 9.25551 27.8473C9.39756 27.9682 9.3757 28.0782 9.36478 28.1112C9.3483 28.147 9.32211 28.1773 9.28925 28.1987C9.25638 28.2201 9.21817 28.2317 9.17903 28.2322C9.13977 28.2316 9.10171 28.2185 9.0703 28.1948C9.03889 28.1711 9.01575 28.138 9.00421 28.1002C9.00421 28.0232 9.00421 27.9682 8.82939 27.9133C8.67162 27.8509 8.50625 27.8102 8.3377 27.7923H8.05362C8.04995 27.8141 8.04995 27.8364 8.05362 27.8583C8.5453 28.4961 8.9168 28.5841 9.14625 28.5841C9.22448 28.5826 9.30095 28.5605 9.36804 28.5199C9.43514 28.4794 9.49052 28.4219 9.52867 28.3532C9.57362 28.2706 9.59718 28.1779 9.59718 28.0837C9.59718 27.9895 9.57362 27.8969 9.52867 27.8143C9.37129 27.6079 9.16092 27.4486 8.92024 27.3536C8.67957 27.2587 8.41771 27.2316 8.16288 27.2754Z"
        fill="#DAC6A1"
      />
      <path
        d="M28.2126 30.8386C27.9207 30.7053 27.6045 30.6342 27.2839 30.6297C27.0591 30.6155 26.8371 30.6861 26.6611 30.8276C26.6019 30.8819 26.5547 30.9482 26.5227 31.0221C26.4907 31.096 26.4745 31.1759 26.4754 31.2565C26.4754 31.5205 26.683 31.8064 27.1419 31.7954C27.4938 31.7711 27.8331 31.6534 28.1252 31.4545C28.1799 31.3995 28.1799 31.3775 28.1799 31.3665C28.1513 31.3585 28.1211 31.3585 28.0925 31.3665H27.8958C27.7104 31.3178 27.5191 31.2956 27.3276 31.3005C27.2784 31.2919 27.2278 31.299 27.1828 31.3206C27.1377 31.3423 27.1005 31.3776 27.0763 31.4215C27.0617 31.4427 27.042 31.4598 27.0191 31.4713C26.9962 31.4829 26.9708 31.4884 26.9452 31.4875C26.8946 31.4865 26.8457 31.4687 26.8062 31.4369C26.7667 31.4051 26.7387 31.361 26.7267 31.3115C26.7267 31.3115 26.7267 31.1356 26.9233 31.0586C27.0251 31.0225 27.1323 31.0039 27.2402 31.0036C27.4399 30.999 27.6379 31.0404 27.8193 31.1246H28.0269C28.2126 31.1246 28.2891 31.0696 28.3001 31.0366C28.311 31.0036 28.3001 30.9486 28.2126 30.9046"
        fill="#DAC6A1"
      />
      <path
        d="M24.8911 31.4435C25.2989 31.4415 25.7002 31.3396 26.0602 31.1466C26.0602 31.1466 26.1585 31.0696 26.1476 31.0036C26.1291 30.9711 26.1018 30.9445 26.0689 30.927C26.0361 30.9095 25.9989 30.9017 25.9618 30.9046C25.926 30.8953 25.8884 30.8953 25.8526 30.9046C25.4597 31.008 25.0566 31.0671 24.6507 31.0806C24.3886 31.0949 24.126 31.0949 23.864 31.0806C23.7547 31.0806 23.6892 31.1466 23.6892 31.2015C23.6892 31.2565 23.7547 31.3445 23.9295 31.3775C24.312 31.3775 24.6288 31.3775 24.8911 31.3775"
        fill="#DAC6A1"
      />
      <path
        d="M24.9566 32.3673C24.9354 32.3502 24.9184 32.3284 24.9071 32.3036C24.8957 32.2788 24.8902 32.2516 24.8911 32.2243C24.8911 32.1583 24.9785 32.1143 25.1096 32.0704L26.2022 31.7514C26.2243 31.7439 26.2431 31.7287 26.2551 31.7086C26.2671 31.6884 26.2716 31.6646 26.2678 31.6414C26.2678 31.6414 26.2678 31.5095 26.0383 31.5095C25.0222 31.6854 24.4868 31.9054 24.4321 32.1583C24.3775 32.4113 24.5523 32.4993 24.8583 32.6972C24.9007 32.7123 24.947 32.7123 24.9894 32.6972C25.0768 32.6972 25.1424 32.6972 25.1533 32.6202C25.1642 32.5433 25.1533 32.5213 25.1533 32.4883L24.9566 32.3673Z"
        fill="#DAC6A1"
      />
      <path
        d="M24.8364 32.9832L23.8531 33.2251C23.8336 33.2502 23.823 33.2812 23.823 33.3131C23.823 33.345 23.8336 33.3759 23.8531 33.4011C23.8584 33.4438 23.8792 33.4831 23.9114 33.5115C23.9436 33.5399 23.9851 33.5554 24.0279 33.555H24.0825L25.0003 33.3351C25.029 33.3172 25.051 33.2902 25.0629 33.2583C25.0747 33.2265 25.0758 33.1916 25.0659 33.1591C25.0566 33.1152 25.0336 33.0754 25.0001 33.0457C24.9667 33.016 24.9246 32.9979 24.8801 32.9942"
        fill="#DAC6A1"
      />
      <path
        d="M13.9648 31.5535C13.7899 31.0366 12.7301 30.5747 11.266 30.4537C11.2315 30.449 11.1965 30.4563 11.1668 30.4743C11.137 30.4922 11.1142 30.5199 11.1021 30.5527C11.1021 30.6077 11.1021 30.6847 11.2441 30.7176C12.016 30.839 12.7577 31.1078 13.4294 31.5095C13.5153 31.5657 13.5776 31.6518 13.6042 31.7514C13.6005 31.7844 13.5899 31.8162 13.5729 31.8447C13.5559 31.8732 13.5331 31.8976 13.5058 31.9164C13.4784 31.9322 13.4551 31.9544 13.4379 31.9812C13.4208 32.008 13.4104 32.0386 13.4075 32.0704C13.4075 32.2133 13.4621 32.2463 13.5605 32.2463H13.7025C13.7917 32.1738 13.8593 32.078 13.8979 31.9693C13.9365 31.8607 13.9445 31.7434 13.921 31.6304"
        fill="#DAC6A1"
      />
      <path
        d="M11.3643 29.9148C11.3643 29.6949 11.1458 29.189 9.88924 28.5951H9.81276C9.81276 28.5951 9.81276 28.5951 9.7472 28.5951C9.74189 28.6217 9.74421 28.6493 9.75388 28.6746C9.76356 28.6999 9.78019 28.7219 9.80183 28.7381L10.0313 28.903L10.1515 28.991C10.416 29.1492 10.6616 29.3374 10.8835 29.5519C10.9098 29.5707 10.9314 29.5954 10.9466 29.624C10.9618 29.6526 10.9701 29.6844 10.9709 29.7169C10.9702 29.7393 10.9638 29.7612 10.9523 29.7804C10.9409 29.7996 10.9247 29.8156 10.9054 29.8268C10.9054 29.9038 10.9054 29.9258 10.9054 29.9258C10.9844 29.9845 11.0804 30.0154 11.1785 30.0138C11.2186 30.0183 11.259 30.0087 11.2928 29.9866C11.3267 29.9646 11.3519 29.9315 11.3643 29.8928"
        fill="#DAC6A1"
      />
      <path
        d="M11.5828 29.167L12.1073 29.3979C12.3175 29.5221 12.5462 29.6112 12.7847 29.6619H12.8612C13.0469 29.6619 13.1781 29.5849 13.2108 29.4639C13.2181 29.4076 13.2071 29.3505 13.1796 29.3009C13.152 29.2514 13.1093 29.2122 13.0579 29.189H12.9595C12.9414 29.2298 12.9124 29.2647 12.8758 29.29C12.8391 29.3152 12.7963 29.3297 12.7519 29.3319H12.5771C11.7353 28.988 10.9207 28.5799 10.1405 28.1112H10.0204C10.0068 28.1044 9.99181 28.1009 9.97665 28.1009C9.96149 28.1009 9.94653 28.1044 9.93294 28.1112V28.2212C10.4513 28.5895 10.9996 28.9132 11.5719 29.189"
        fill="#DAC6A1"
      />
      <path
        d="M2.55769 16.4977C2.72213 16.5597 2.8608 16.676 2.95104 16.8276C2.99267 16.9899 2.99267 17.1602 2.95104 17.3225C2.94618 17.4424 2.9241 17.561 2.88548 17.6745C2.88548 17.6745 2.88548 17.6745 2.76529 17.6745L1.78192 17.5535V17.2346C1.78192 17.0696 1.84748 17.0146 1.88026 16.9926C1.98502 16.9734 2.09236 16.9734 2.19712 16.9926V16.8386L1.17005 16.7067V16.8496C1.27692 16.871 1.37771 16.9161 1.46506 16.9816C1.46506 16.9816 1.46506 17.0696 1.46506 17.2346V17.5535L0.58003 17.4435C0.514473 17.4435 0.49262 17.4435 0.49262 17.4435C0.49262 17.4435 0.49262 17.4435 0.49262 17.3885L0.547252 16.9376C0.547252 16.7067 0.623736 16.6187 0.667441 16.5967C0.711146 16.5747 0.78763 16.5307 1.00616 16.5197V16.3657L0.514473 16.2558L0.274094 18.1034H0.427062C0.514473 17.9494 0.514473 17.9494 0.514473 17.8834C0.514473 17.8174 0.514473 17.8834 0.634662 17.8834H0.776704L2.69973 18.1144C2.88548 18.1144 2.94011 18.1694 2.96196 18.1914C2.97874 18.2637 2.97874 18.339 2.96196 18.4113H3.11493L3.35531 16.5417L2.6014 16.2778L2.55769 16.4977Z"
        fill="#DAC6A1"
      />
      <path
        d="M3.0603 14.5291C2.91045 14.4852 2.75124 14.4852 2.6014 14.5291C2.42376 14.5982 2.25788 14.6947 2.10971 14.8151L1.82563 15.046C1.7381 15.1127 1.64268 15.1681 1.54155 15.211C1.45631 15.2387 1.36455 15.2387 1.27931 15.211C1.18727 15.1883 1.10605 15.1338 1.04986 15.057C1.02317 14.9824 1.02317 14.9007 1.04986 14.8261C1.09227 14.7075 1.17309 14.6068 1.27931 14.5401C1.45564 14.4419 1.65865 14.4034 1.85841 14.4302V14.2872L0.896893 14.1222V14.2542C0.896893 14.2542 0.962451 14.2542 0.973377 14.2542C0.984304 14.2542 0.973377 14.2542 0.973377 14.3092C0.943787 14.3651 0.907054 14.4169 0.864114 14.4632C0.796228 14.5383 0.747484 14.6288 0.722072 14.7271C0.697042 14.815 0.6929 14.9076 0.709983 14.9974C0.727065 15.0871 0.764893 15.1716 0.820409 15.244C0.944781 15.3999 1.1182 15.5085 1.31209 15.5519C1.46864 15.601 1.6363 15.601 1.79285 15.5519C1.88218 15.5104 1.9665 15.4588 2.04416 15.398L2.32824 15.178C2.44445 15.1014 2.56912 15.0387 2.69973 14.991C2.80924 14.9516 2.92894 14.9516 3.03845 14.991C3.09754 15.0008 3.15409 15.0223 3.20476 15.0545C3.25543 15.0866 3.29919 15.1286 3.33346 15.178C3.35151 15.2196 3.36082 15.2646 3.36082 15.31C3.36082 15.3554 3.35151 15.4003 3.33346 15.4419C3.30743 15.5335 3.25866 15.6169 3.19175 15.6842C3.12485 15.7516 3.04201 15.8007 2.95104 15.8269C2.79633 15.88 2.63372 15.906 2.47028 15.9038V16.0358L3.42087 16.1788V16.0358H3.34439C3.34439 16.0358 3.34438 16.0358 3.45365 15.8709C3.52808 15.7818 3.5805 15.6763 3.60662 15.5629C3.637 15.4673 3.64492 15.3659 3.62975 15.2666C3.61458 15.1674 3.57674 15.0731 3.51921 14.991C3.40398 14.812 3.22349 14.6856 3.0166 14.6391"
        fill="#DAC6A1"
      />
      <path
        d="M4.21849 13.0885C4.18895 13.1717 4.13576 13.2444 4.06552 13.2974C3.97114 13.3054 3.87645 13.2863 3.79236 13.2424L1.84748 12.4506V12.3076C1.88148 12.1849 1.9593 12.0792 2.06601 12.0107C2.21021 11.9811 2.35886 11.9811 2.50306 12.0107L2.56862 11.8787L1.82563 11.6148L1.18098 13.5504L1.91304 13.8583V13.7153C1.78252 13.6314 1.67684 13.5136 1.6071 13.3744C1.56251 13.2576 1.56251 13.1283 1.6071 13.0115V12.8685L3.51921 13.6053C3.62219 13.6394 3.71837 13.6915 3.80329 13.7593C3.80329 13.7593 3.80329 13.8473 3.80329 14.0123L3.94533 14.0672L4.31683 13.0885L4.17478 13.0225L4.21849 13.0885Z"
        fill="#DAC6A1"
      />
      <path
        d="M4.0983 11.0429L3.79236 11.6368L3.0603 10.8779L4.0983 11.0429ZM5.40946 10.691C5.37889 10.7342 5.33739 10.7684 5.28927 10.7899C5.18817 10.809 5.08443 10.809 4.98333 10.7899L2.48121 10.394L2.41565 10.504L3.92348 12.0987C4.06245 12.2457 4.19374 12.3999 4.31683 12.5606C4.33069 12.5917 4.33786 12.6254 4.33786 12.6595C4.33786 12.6937 4.33069 12.7274 4.31683 12.7585L4.44794 12.8355L4.78666 12.1757L4.65554 12.1097L4.5572 12.2306C4.5572 12.2306 4.48072 12.2306 4.42609 12.2306L4.32775 12.1427L3.97811 11.7907L4.36053 11.0649L4.75388 11.1199H5.00518C5.00518 11.1199 5.07074 11.1199 5.07074 11.1749C5.07611 11.2334 5.07611 11.2923 5.07074 11.3508L5.20186 11.4168L5.63891 10.592L5.50779 10.526L5.40946 10.691Z"
        fill="#DAC6A1"
      />
      <path
        d="M6.11967 9.25028C6.12003 9.47488 6.04277 9.6926 5.90114 9.86615C5.90114 9.94313 5.81373 9.96513 5.8028 9.96513C5.77092 9.97602 5.73635 9.97602 5.70447 9.96513L3.98904 8.66741C3.92348 8.61242 3.92348 8.59043 3.92348 8.57943C3.92348 8.56843 3.92348 8.57943 3.92348 8.45845C3.9998 8.34474 4.10006 8.24933 4.21714 8.179C4.33421 8.10868 4.46524 8.06516 4.60091 8.05154H4.73203C5.03118 8.07091 5.31722 8.18223 5.5515 8.37047C5.71301 8.45886 5.84976 8.58683 5.94907 8.74254C6.04839 8.89826 6.10706 9.07668 6.11967 9.26128V9.25028ZM6.22893 8.45845C6.11476 8.29601 5.96997 8.15775 5.8028 8.05154C5.62296 7.89011 5.40271 7.78122 5.16584 7.73663C4.92898 7.69205 4.68451 7.71348 4.45887 7.7986C4.20845 7.91072 3.99314 8.08942 3.83607 8.31549L3.28975 9.08532L3.40994 9.1733C3.49735 9.07432 3.55198 9.04133 3.59569 9.04133C3.6394 9.04133 3.69403 9.04133 3.83607 9.1733L5.33297 10.2731C5.48594 10.383 5.51872 10.438 5.51872 10.46C5.51872 10.482 5.51872 10.559 5.45316 10.68L5.56242 10.768L6.14152 9.97613C6.2747 9.8007 6.36795 9.59797 6.41468 9.38225C6.43676 9.2697 6.43676 9.15388 6.41468 9.04133C6.38812 8.84788 6.31703 8.66335 6.20708 8.50244"
        fill="#DAC6A1"
      />
      <path
        d="M7.70398 7.7876C7.63473 7.85948 7.54659 7.91006 7.44986 7.93343C7.35313 7.95679 7.25179 7.95199 7.15766 7.91957C6.84165 7.82826 6.55763 7.64911 6.33819 7.40268C6.08607 7.18187 5.89741 6.89703 5.79188 6.57786C5.76414 6.48345 5.76062 6.3835 5.78163 6.28735C5.80265 6.19119 5.84752 6.10196 5.91207 6.02798C5.96196 5.97285 6.02269 5.92875 6.0904 5.89846C6.1581 5.86817 6.23132 5.85236 6.30541 5.85202H6.44745C6.77312 5.93429 7.06411 6.11926 7.27785 6.3799C7.53712 6.5943 7.72726 6.88138 7.82417 7.20472C7.8543 7.29711 7.85904 7.39597 7.83788 7.49084C7.81672 7.58571 7.77045 7.67306 7.70398 7.74361V7.7876ZM7.59472 6.06097C7.33583 5.76032 6.97203 5.57132 6.57857 5.53309C6.4265 5.51502 6.27234 5.53463 6.12952 5.59021C5.9867 5.6458 5.85953 5.73567 5.7591 5.85202C5.65225 5.95849 5.57108 6.08821 5.52183 6.2312C5.47258 6.37419 5.45657 6.52664 5.47501 6.67684C5.53168 7.07191 5.72517 7.43415 6.02133 7.69962C6.27772 7.984 6.62632 8.16724 7.00469 8.21651H7.14674C7.2807 8.21907 7.41376 8.19405 7.53777 8.14299C7.66178 8.09193 7.77411 8.0159 7.86787 7.91957C7.96671 7.80799 8.04191 7.6773 8.08887 7.53548C8.13584 7.39367 8.15358 7.2437 8.14103 7.09475C8.09106 6.69749 7.89638 6.33303 7.59472 6.07197"
        fill="#DAC6A1"
      />
      <path
        d="M9.17903 5.12617C9.00868 5.07686 8.83173 5.0546 8.65457 5.06019H8.22844C8.12697 5.07463 8.02398 5.07463 7.92251 5.06019C7.83242 5.03324 7.7549 4.97472 7.70398 4.89522C7.67265 4.86156 7.64868 4.82165 7.63363 4.77808C7.61857 4.73451 7.61276 4.68825 7.61657 4.64228C7.62558 4.56436 7.66486 4.49319 7.72583 4.44432C7.82987 4.36788 7.95821 4.33265 8.0864 4.34534C8.28443 4.38263 8.46699 4.47833 8.61086 4.62028L8.73105 4.5213L8.07547 3.81746L7.96621 3.89444C7.9754 3.92304 7.9754 3.95382 7.96621 3.98242C7.96621 3.98242 7.96621 3.98242 7.79139 4.03741C7.69439 4.06246 7.60212 4.10333 7.51823 4.15838C7.44582 4.21357 7.38732 4.28513 7.34746 4.36728C7.3076 4.44943 7.2875 4.53987 7.28878 4.63128C7.28743 4.83226 7.35714 5.02717 7.48545 5.18116C7.58676 5.31254 7.72924 5.40557 7.88973 5.44511C7.98761 5.45853 8.08685 5.45853 8.18474 5.44511H8.57808C8.705 5.42815 8.83359 5.42815 8.9605 5.44511C9.07862 5.46808 9.18388 5.53479 9.25551 5.63206C9.3372 5.72181 9.38039 5.84037 9.3757 5.96199C9.37379 6.00858 9.36209 6.05423 9.34138 6.09593C9.32066 6.13764 9.2914 6.17445 9.25551 6.20394C9.1811 6.26345 9.09228 6.30195 8.99819 6.31548C8.9041 6.32901 8.80812 6.31708 8.72013 6.28092C8.56758 6.22544 8.42399 6.14762 8.294 6.04997L8.17381 6.13796L8.86217 6.83081L8.97143 6.74282V6.65484C9.03305 6.64626 9.09556 6.64626 9.15718 6.65484C9.2714 6.62381 9.37886 6.5716 9.47404 6.50088C9.55429 6.44001 9.62034 6.3622 9.66753 6.2729C9.71472 6.1836 9.74191 6.08499 9.7472 5.98399C9.75554 5.7719 9.68547 5.56422 9.55052 5.40111C9.45676 5.27883 9.33229 5.18393 9.18996 5.12617"
        fill="#DAC6A1"
      />
      <path
        d="M12.2821 2.20081C12.2105 2.0839 12.1657 1.95241 12.151 1.81589C12.1637 1.77351 12.1848 1.73415 12.2129 1.70014C12.2411 1.66613 12.2758 1.63817 12.3149 1.61793L12.2821 1.45297L11.5173 1.81589L11.5828 1.94786C11.6645 1.92099 11.7525 1.92099 11.8341 1.94786C11.9348 2.04292 12.0132 2.15939 12.0636 2.28879L12.5334 3.27857C12.6248 3.45041 12.6875 3.63617 12.7192 3.82845C12.7265 3.93854 12.6986 4.0481 12.6396 4.14111C12.5807 4.23411 12.4937 4.30568 12.3914 4.34534C12.3032 4.39656 12.2005 4.41679 12.0997 4.40285C11.9988 4.38892 11.9054 4.3416 11.8341 4.26836C11.7109 4.15101 11.6141 4.00852 11.55 3.85045L10.9709 2.64071C10.8835 2.47575 10.8835 2.40976 10.8945 2.37677C10.9054 2.34378 10.8945 2.28879 11.0693 2.2118L11.0037 2.07983L10.0859 2.51974V2.66271C10.161 2.64214 10.2402 2.64214 10.3154 2.66271C10.3154 2.66271 10.4028 2.71769 10.4793 2.89366L11.0474 4.0704C11.1312 4.27171 11.258 4.45195 11.4189 4.59829C11.5538 4.71317 11.7231 4.77903 11.8997 4.78525C12.0435 4.78254 12.1851 4.74879 12.3149 4.68627C12.468 4.62675 12.5987 4.52053 12.6888 4.38249C12.779 4.24444 12.824 4.08149 12.8175 3.91644C12.7921 3.6814 12.7216 3.45356 12.6099 3.24558L12.2821 2.20081Z"
        fill="#DAC6A1"
      />
      <path
        d="M14.7842 0.903086C14.7842 0.8371 14.8716 0.79311 14.9809 0.738122V0.595152L14.1505 0.848098V0.991067C14.2252 0.967428 14.3053 0.967428 14.3799 0.991067C14.4835 1.09583 14.5522 1.2303 14.5766 1.37598L15.0246 2.55273L13.2764 1.12304L12.6754 1.31V1.45297H12.8066C12.8589 1.47332 12.907 1.50313 12.9486 1.54095L13.626 3.31157C13.6791 3.43634 13.7016 3.57213 13.6916 3.70748C13.6468 3.78358 13.5774 3.84183 13.4949 3.87244V4.01541L14.3144 3.76247V3.6195C14.2437 3.64466 14.1666 3.64466 14.0959 3.6195C13.9924 3.51473 13.9237 3.38026 13.8992 3.23458L13.4512 1.80489L15.4617 3.48753H15.5709L14.9044 1.35399C14.8454 1.22696 14.8191 1.08702 14.8279 0.947076"
        fill="#DAC6A1"
      />
      <path
        d="M16.9039 2.97064H16.7947C16.7478 2.98074 16.6994 2.98074 16.6526 2.97064C16.6526 2.97064 16.6526 2.90465 16.5543 2.7067L16.1391 0.870093C16.1391 0.694131 16.1391 0.617148 16.1391 0.584155C16.1391 0.551162 16.2046 0.518169 16.3576 0.474179V0.33121L15.3196 0.540164V0.683134C15.4398 0.683134 15.5272 0.683134 15.56 0.683134C15.5928 0.683134 15.6365 0.760117 15.6693 0.936079L16.0298 2.77268C16.0298 2.95964 16.0298 3.02563 16.0298 3.04762C15.9637 3.10305 15.8848 3.14087 15.8004 3.1576V3.30057L16.893 3.09161V2.94864L16.9039 2.97064Z"
        fill="#DAC6A1"
      />
      <path
        d="M17.778 2.76168H17.6906C17.6906 2.76168 17.6906 2.76169 17.6906 2.65171L17.4939 0.529167C17.4939 0.452183 17.4939 0.430188 17.4939 0.419191H17.7343C17.9539 0.408212 18.1692 0.483079 18.3353 0.628146C18.4598 0.744814 18.559 0.886118 18.6267 1.0432C18.6944 1.20027 18.7291 1.36973 18.7286 1.54095C18.761 1.72107 18.7512 1.90632 18.7 2.08196C18.6488 2.2576 18.5576 2.4188 18.4336 2.55273C18.2653 2.69786 18.054 2.78292 17.8327 2.79468L17.778 2.76168ZM18.4664 0.265224C18.2174 0.149364 17.9407 0.107398 17.6688 0.14425L16.7291 0.221234V0.3752C16.8711 0.3752 16.9258 0.3752 16.9476 0.430189C16.9953 0.50955 17.0182 0.601521 17.0132 0.694131L17.2317 2.55273C17.2317 2.73969 17.2317 2.80568 17.2317 2.81667C17.2317 2.82767 17.1552 2.88266 17.0241 2.91565V3.06962L17.9966 2.98164C18.217 2.96411 18.4321 2.90439 18.6303 2.80567C18.7276 2.74517 18.8158 2.67112 18.8925 2.58572C18.9962 2.43068 19.0634 2.25392 19.0892 2.06883C19.122 1.86488 19.122 1.65693 19.0892 1.45297C19.0965 1.20997 19.0358 0.969783 18.9141 0.759787C18.7924 0.549791 18.6146 0.378428 18.4008 0.265224"
        fill="#DAC6A1"
      />
      <path
        d="M21.2744 1.52995C21.2825 1.86294 21.1952 2.19124 21.0231 2.47575C20.9728 2.56135 20.9007 2.63192 20.8143 2.68024C20.7279 2.72855 20.6303 2.75287 20.5315 2.75069C20.433 2.74066 20.339 2.70494 20.2585 2.64708C20.178 2.58921 20.1139 2.5112 20.0726 2.42076C19.9455 2.11525 19.9039 1.78056 19.9524 1.45297C19.9413 1.12249 20.0206 0.795305 20.1818 0.507171C20.2311 0.425483 20.2999 0.357521 20.382 0.309493C20.464 0.261464 20.5567 0.234901 20.6516 0.232231C20.7478 0.240111 20.8404 0.272517 20.9207 0.326392C21.001 0.380267 21.0663 0.453837 21.1106 0.540164C21.2557 0.848209 21.3089 1.19207 21.2635 1.52995H21.2744ZM20.6626 0.00128062C20.5116 -0.0065003 20.3609 0.0212566 20.2224 0.0823467C20.084 0.143437 19.9616 0.236178 19.865 0.353205C19.6027 0.658632 19.4591 1.04927 19.4607 1.45297C19.4229 1.83879 19.5153 2.22617 19.7229 2.55273C19.8072 2.68712 19.923 2.79856 20.0602 2.8772C20.1974 2.95584 20.3518 2.99926 20.5096 3.00363H20.5642C20.704 3.00301 20.8421 2.97339 20.9699 2.91662C21.0977 2.85985 21.2126 2.77716 21.3072 2.6737C21.5731 2.3704 21.7172 1.97835 21.7115 1.57394C21.7532 1.18475 21.6521 0.793657 21.4274 0.474179C21.3403 0.349257 21.2263 0.245785 21.0938 0.171508C20.9614 0.0972316 20.8139 0.0540753 20.6626 0.0452711"
        fill="#DAC6A1"
      />
      <path
        d="M23.6564 0.41919C23.6564 0.41919 23.6564 0.485176 23.6564 0.496174L23.4597 0.41919C23.3797 0.355006 23.2863 0.309887 23.1865 0.287219C23.0966 0.269845 23.0039 0.272665 22.9151 0.295476C22.8264 0.318288 22.7437 0.36053 22.673 0.41919C22.5293 0.556138 22.4367 0.738621 22.4108 0.936079C22.3414 1.09916 22.326 1.28042 22.3671 1.45297C22.417 1.53938 22.4756 1.62044 22.5419 1.69492L22.7823 1.96986C22.8762 2.0716 22.9603 2.18207 23.0336 2.29978C23.09 2.40656 23.1099 2.52907 23.0901 2.64836C23.0704 2.76765 23.0121 2.87705 22.9243 2.95964C22.8474 3.01213 22.7545 3.0355 22.6621 3.02563C22.568 3.00545 22.4806 2.96157 22.408 2.89809C22.3353 2.83462 22.2799 2.75363 22.2469 2.66271C22.1876 2.51514 22.1508 2.35942 22.1376 2.20081H21.9956L21.93 3.1686H22.0611V3.08062L22.225 3.17959C22.3202 3.24784 22.4279 3.29643 22.5419 3.32256H22.6949C22.8458 3.3262 22.993 3.2755 23.1101 3.17959C23.249 3.06126 23.3494 2.90357 23.3981 2.72705C23.4468 2.55052 23.4416 2.36333 23.3832 2.18981C23.3023 2.01679 23.1954 1.8573 23.0664 1.71691L22.8151 1.44197C22.7373 1.36223 22.6744 1.26911 22.6293 1.16703C22.601 1.08136 22.601 0.988757 22.6293 0.903086C22.6347 0.857711 22.649 0.813883 22.6716 0.774209C22.6941 0.734535 22.7243 0.699823 22.7604 0.672136C22.834 0.642174 22.9163 0.642174 22.9899 0.672136C23.1114 0.700605 23.2172 0.775538 23.2849 0.881091C23.3942 1.05494 23.4476 1.25847 23.4379 1.46396H23.5908L23.6782 0.496174H23.5471L23.6564 0.41919Z"
        fill="#DAC6A1"
      />
      <path
        d="M27.6991 4.75225C27.6312 4.72266 27.574 4.67274 27.5352 4.60929C27.5352 4.60929 27.5352 4.51031 27.6008 4.33434L28.3438 2.62971C28.3766 2.54202 28.4289 2.46303 28.4967 2.39876C28.572 2.37921 28.6509 2.37921 28.7262 2.39876V2.26679L28.0597 1.96986L26.7376 3.54252L26.8687 1.34299L26.2022 1.05705L26.1476 1.18902C26.2787 1.25501 26.3224 1.31 26.3333 1.34299C26.3299 1.4346 26.3076 1.52449 26.2678 1.60693L25.5794 3.1686C25.5364 3.29644 25.4655 3.41295 25.3718 3.50952C25.2877 3.54377 25.1937 3.54377 25.1096 3.50952L25.0549 3.65249L25.8416 3.99342L25.8963 3.86145C25.7761 3.79546 25.7433 3.74047 25.7324 3.70748C25.7244 3.56009 25.7626 3.4139 25.8416 3.28957L26.4317 1.94786L26.2896 4.14739H26.377L27.9067 2.55273L27.2402 4.0814C27.204 4.18296 27.1483 4.27637 27.0763 4.35634C26.9981 4.38159 26.9141 4.38159 26.8359 4.35634V4.48831L27.7537 4.89522L27.8193 4.76325L27.6991 4.75225Z"
        fill="#DAC6A1"
      />
      <path
        d="M29.6986 5.29114C29.5765 5.41074 29.4195 5.48782 29.2506 5.51109C29.0893 5.48333 28.9362 5.41944 28.8027 5.32413C28.6943 5.26548 28.595 5.1914 28.5077 5.10418C28.5077 5.10418 28.5077 5.0272 28.5077 4.9942L29.043 4.14739L29.3162 4.33434C29.4473 4.42233 29.4801 4.47731 29.491 4.5213C29.4801 4.62833 29.4506 4.73258 29.4036 4.82924L29.5347 4.90622L30.092 4.02641L29.9609 3.94943C29.9042 4.03839 29.825 4.11052 29.7314 4.15838C29.6768 4.15838 29.6003 4.15838 29.491 4.0814L29.2179 3.90544L29.6986 3.1356C29.6986 3.1356 29.6986 3.06962 29.7533 3.06962H29.8079L30.1903 3.31157C30.387 3.43254 30.4416 3.52052 30.4525 3.56451C30.4625 3.68687 30.4358 3.80942 30.3761 3.91643L30.5072 4.00442L30.8568 3.42154L29.2179 2.55273L29.1305 2.6737C29.1953 2.71558 29.245 2.77725 29.2725 2.84967C29.2619 2.94304 29.2238 3.0311 29.1632 3.10261L28.1689 4.67527C28.0706 4.84024 28.016 4.87323 27.9941 4.88423C27.9188 4.90331 27.84 4.90331 27.7647 4.88423L27.6882 5.0162L29.2616 6.02798L29.8188 5.44511L29.6986 5.29114Z"
        fill="#DAC6A1"
      />
      <path
        d="M31.3048 7.42468C31.265 7.37205 31.2353 7.31236 31.2174 7.24872C31.1984 7.16177 31.1984 7.07172 31.2174 6.98477L31.4687 5.70905L32.2991 5.44511C32.4372 5.40084 32.5804 5.37496 32.7252 5.36812C32.7902 5.38122 32.8506 5.4116 32.9 5.4561L32.9984 5.34613L32.3428 4.78525L32.2445 4.89522L32.3428 5.0052C32.3544 5.01907 32.3607 5.03659 32.3607 5.05469C32.3607 5.07279 32.3544 5.09031 32.3428 5.10418H32.2882C32.2226 5.13893 32.1528 5.16481 32.0806 5.18116L31.4905 5.35712L31.6107 4.71926V4.62028C31.6027 4.58407 31.6027 4.54652 31.6107 4.51031C31.6107 4.51031 31.6654 4.51031 31.6981 4.51031C31.7309 4.51031 31.7528 4.51031 31.8402 4.60929L31.9385 4.49931L31.1081 3.80646L31.0207 3.91643C31.0533 3.94567 31.0797 3.98116 31.0985 4.02082C31.1172 4.06048 31.1279 4.10351 31.13 4.14739C31.1252 4.35905 31.0959 4.56944 31.0426 4.77425L30.8896 5.51109L30.0046 5.78603L29.5457 5.90701C29.4787 5.90338 29.4143 5.88048 29.3599 5.84102L29.2725 5.951L29.9172 6.50088L30.0155 6.3799V6.31392C30.0047 6.29764 29.9989 6.2785 29.9989 6.25893C29.9989 6.23935 30.0047 6.22022 30.0155 6.20394C30.0501 6.17049 30.0909 6.14432 30.1357 6.12696L30.3542 6.06097L30.9879 5.85202C30.9114 6.28092 30.8459 6.54487 30.824 6.65484C30.8121 6.72536 30.7861 6.79271 30.7475 6.8528H30.682C30.6238 6.82627 30.5688 6.79305 30.5181 6.75382L30.4198 6.8638L31.2283 7.54565L31.3157 7.43567L31.3048 7.42468Z"
        fill="#DAC6A1"
      />
      <path
        d="M32.2007 7.83159L33.5338 6.54487C33.6649 6.42389 33.7304 6.3909 33.7741 6.3909C33.8178 6.3909 33.8615 6.3909 33.9708 6.52287L34.0801 6.42389L33.2934 5.66506L33.1841 5.77503C33.2825 5.89601 33.3043 5.96199 33.2934 5.99499C33.2825 6.02798 33.2934 6.09397 33.1404 6.22594L31.7965 7.51266C31.6654 7.65563 31.5998 7.66663 31.567 7.66663C31.5342 7.66663 31.4796 7.66662 31.3594 7.54565L31.2502 7.64463L31.9931 8.41446L32.1024 8.31549C31.9931 8.19451 31.9713 8.12853 31.9713 8.09553C31.9713 8.06254 31.9713 8.00755 32.1461 7.86458"
        fill="#DAC6A1"
      />
      <path
        d="M33.7741 9.84416V9.67919C33.6544 9.6934 33.5333 9.6934 33.4136 9.67919C33.2573 9.63091 33.1198 9.53481 33.0202 9.40425C32.9509 9.31536 32.9047 9.21054 32.8856 9.0992C32.8665 8.98786 32.8752 8.8735 32.911 8.76639C33.0191 8.47307 33.2135 8.21989 33.4682 8.04054C33.7144 7.82942 34.0126 7.68887 34.3314 7.63363C34.4429 7.6158 34.5571 7.62774 34.6625 7.66827C34.768 7.7088 34.861 7.7765 34.9323 7.86458C34.9961 7.95005 35.0367 8.05077 35.0502 8.15682C35.0636 8.26288 35.0493 8.37062 35.0088 8.46945C34.9483 8.61251 34.8673 8.7459 34.7684 8.86537L34.8558 8.97534L35.6316 8.32648L35.5551 8.21651C35.5268 8.22657 35.496 8.22657 35.4677 8.21651H35.4022L35.3366 8.01855C35.2903 7.89353 35.2279 7.77521 35.1509 7.66663C35.048 7.53556 34.9167 7.4298 34.7672 7.35739C34.6176 7.28498 34.4536 7.24782 34.2877 7.24872C33.9157 7.26836 33.5597 7.40707 33.2715 7.64463C32.9806 7.86103 32.7662 8.1655 32.6597 8.51344C32.6119 8.67979 32.6038 8.85514 32.6361 9.02523C32.6683 9.19531 32.7401 9.35532 32.8454 9.49223C32.9928 9.67267 33.1972 9.79686 33.4245 9.84416H33.8506"
        fill="#DAC6A1"
      />
      <path
        d="M35.8064 9.99812L35.1071 10.7899L34.7794 10.2181L35.8064 9.99812ZM34.7138 12.1097C34.6989 12.0557 34.6989 11.9987 34.7138 11.9447C34.7568 11.8507 34.816 11.7651 34.8886 11.6918L36.5713 9.75617L36.5166 9.6462L34.3314 10.0861C34.1376 10.1346 33.9403 10.1676 33.7414 10.1851C33.7061 10.1859 33.6712 10.1771 33.6405 10.1597C33.6097 10.1423 33.5842 10.1169 33.5665 10.0861L33.4354 10.1631L33.8069 10.8009L33.938 10.724C33.9354 10.68 33.9354 10.6359 33.938 10.592C33.9491 10.5471 33.9764 10.5079 34.0145 10.482H34.1456L34.6264 10.372L35.0416 11.0869L34.7794 11.3838C34.745 11.4295 34.7045 11.4702 34.6592 11.5048C34.6376 11.531 34.6117 11.5534 34.5827 11.5708C34.5827 11.5708 34.5171 11.5708 34.5062 11.5708C34.4612 11.5316 34.4209 11.4873 34.386 11.4388L34.2658 11.5158L34.7247 12.3186L34.8558 12.2416L34.7138 12.1097Z"
        fill="#DAC6A1"
      />
      <path
        d="M37.8059 13.2424C37.8856 13.2787 37.9509 13.3406 37.9917 13.4184L38.1228 13.3634L37.8059 12.5606L37.6748 12.6156C37.6748 12.7585 37.6748 12.8135 37.6748 12.8465C37.6748 12.8795 37.5656 12.9675 37.3143 13.0665L36.1451 13.5394L37.4563 11.6808L37.2268 11.0869L37.0739 11.1529C37.0889 11.1993 37.0889 11.2494 37.0739 11.2958C37.062 11.3475 37.0397 11.3962 37.0083 11.4388L35.3147 12.1317C35.1958 12.1919 35.0654 12.2256 34.9323 12.2306C34.8668 12.2306 34.8012 12.1537 34.7466 12.0437L34.6155 12.0987L34.9323 12.9015L35.0744 12.8465C35.0525 12.7748 35.0525 12.6982 35.0744 12.6266C35.1906 12.5319 35.3305 12.471 35.4786 12.4506L36.8663 11.8897L35.3694 14.0233V14.1222L37.4344 13.2864C37.5572 13.226 37.6912 13.1922 37.8278 13.1874"
        fill="#DAC6A1"
      />
      <path
        d="M36.3418 15.9918C36.247 15.9673 36.1605 15.9177 36.0913 15.848C36.0221 15.7784 35.9728 15.6913 35.9485 15.5959C35.9299 15.4976 35.9372 15.3961 35.9698 15.3015C36.0024 15.2069 36.0591 15.1226 36.1342 15.057C36.381 14.8382 36.6839 14.6934 37.0083 14.6391C37.2048 14.5875 37.4063 14.558 37.6093 14.5511C37.7352 14.549 37.8607 14.5676 37.9808 14.6061C38.0784 14.6268 38.1683 14.6744 38.2404 14.7437C38.3126 14.8131 38.364 14.9013 38.389 14.9985C38.414 15.0957 38.4115 15.1979 38.3819 15.2938C38.3522 15.3896 38.2965 15.4752 38.2211 15.5409C37.967 15.7635 37.6571 15.9118 37.3252 15.9698C37.004 16.0633 36.663 16.0633 36.3418 15.9698V15.9918ZM36.9318 16.4537C37.1014 16.452 37.2701 16.4299 37.4344 16.3877C37.8202 16.3092 38.1674 16.0995 38.4178 15.7939C38.511 15.6721 38.576 15.5309 38.6082 15.3806C38.6403 15.2303 38.6387 15.0747 38.6036 14.9251C38.5672 14.7781 38.4981 14.6413 38.4016 14.5251C38.3051 14.4089 38.1836 14.3163 38.0463 14.2542C37.6862 14.0879 37.2779 14.0605 36.8991 14.1772C36.528 14.2498 36.1927 14.4477 35.9485 14.7381C35.8433 14.8578 35.7685 15.0013 35.7305 15.1565C35.6924 15.3116 35.6922 15.4737 35.7299 15.6289C35.7711 15.7722 35.8407 15.9055 35.9346 16.0208C36.0285 16.1362 36.1448 16.2311 36.2763 16.2998C36.4798 16.402 36.7044 16.4548 36.9318 16.4537Z"
        fill="#DAC6A1"
      />
      <path
        d="M39.0843 17.8724H38.986C38.986 17.8724 38.986 17.8724 38.986 17.8174C38.9799 17.7589 38.9799 17.7 38.986 17.6415C39.0057 17.5435 39.0057 17.4425 38.986 17.3445C38.9939 17.2491 38.9769 17.1532 38.9366 17.0664C38.8964 16.9796 38.8343 16.9049 38.7565 16.8496C38.5883 16.7406 38.3848 16.7012 38.1884 16.7397C38.026 16.759 37.8734 16.8281 37.7513 16.9376C37.6785 17.0092 37.616 17.0906 37.5656 17.1796L37.3798 17.4875C37.3099 17.6115 37.2294 17.7293 37.1394 17.8394C37.0525 17.9212 36.941 17.9715 36.8226 17.9824C36.7647 17.9958 36.7046 17.9968 36.6463 17.9855C36.588 17.9741 36.5326 17.9506 36.4839 17.9164C36.4453 17.8903 36.4126 17.8562 36.3881 17.8163C36.3636 17.7765 36.3479 17.7319 36.3418 17.6855C36.3304 17.5908 36.3447 17.4948 36.3832 17.4077C36.4217 17.3205 36.4829 17.2455 36.5603 17.1906C36.6858 17.0893 36.8258 17.0077 36.9755 16.9486V16.7947L36.0359 17.0256V17.1576H36.1342C36.1423 17.2233 36.1423 17.2898 36.1342 17.3555C36.1023 17.4669 36.1023 17.5851 36.1342 17.6965C36.1416 17.7966 36.1709 17.8939 36.22 17.9814C36.2691 18.0688 36.3368 18.1443 36.4183 18.2023C36.5595 18.3001 36.7278 18.3501 36.8991 18.3453H37.0192C37.1745 18.3346 37.323 18.2771 37.4454 18.1804C37.5846 18.0494 37.7026 17.8972 37.795 17.7295L37.9808 17.4105C38.0325 17.3162 38.0989 17.2308 38.1774 17.1576C38.2459 17.0926 38.3348 17.0537 38.4287 17.0476C38.4746 17.0399 38.5216 17.0418 38.5667 17.0531C38.6118 17.0645 38.6541 17.0851 38.691 17.1136C38.7232 17.1368 38.7504 17.1663 38.7711 17.2003C38.7917 17.2343 38.8054 17.2721 38.8112 17.3115C38.813 17.4393 38.7705 17.5638 38.691 17.6635C38.5621 17.8195 38.3852 17.9278 38.1884 17.9714V18.1254L39.1389 17.9274L39.0843 17.8724Z"
        fill="#DAC6A1"
      />
      <path
        d="M19.0892 37.6461C19.0349 37.6514 18.9805 37.638 18.9348 37.608C18.8892 37.578 18.855 37.5333 18.8379 37.4812C18.7276 37.0893 18.7276 36.6743 18.8379 36.2824C18.8471 36.2256 18.8744 36.1733 18.9159 36.1336C18.9573 36.0939 19.0105 36.0689 19.0673 36.0625C19.1283 36.0601 19.1883 36.0782 19.2378 36.1141C19.2873 36.15 19.3235 36.2015 19.3405 36.2604C19.3949 36.6434 19.3949 37.0322 19.3405 37.4152C19.3212 37.4777 19.2839 37.5331 19.2334 37.5742C19.1828 37.6153 19.1212 37.6404 19.0564 37.6461"
        fill="#DAC6A1"
      />
      <path
        d="M20.1818 37.5912C20.1508 37.6012 20.118 37.6041 20.0858 37.5997C20.0536 37.5953 20.0227 37.5837 19.9955 37.5658C19.9683 37.5479 19.9454 37.5241 19.9285 37.4961C19.9116 37.4682 19.9011 37.4368 19.8977 37.4042V36.4364C19.881 36.3156 19.9124 36.1931 19.9851 36.0955C20.0072 36.0673 20.0355 36.0447 20.0677 36.0294C20.0999 36.0141 20.1353 36.0066 20.1709 36.0075C20.2144 36.0074 20.2575 36.0163 20.2974 36.0337C20.3374 36.0511 20.3733 36.0766 20.403 36.1086C20.4328 36.1405 20.4556 36.1783 20.4702 36.2196C20.4848 36.2609 20.4908 36.3047 20.4878 36.3484V37.2722C20.4948 37.3115 20.4926 37.3519 20.4812 37.3901C20.4698 37.4284 20.4496 37.4633 20.4222 37.4922C20.3947 37.5232 20.361 37.548 20.3234 37.565C20.2857 37.5821 20.2449 37.591 20.2037 37.5912"
        fill="#DAC6A1"
      />
      <path
        d="M16.6963 38.361H16.5434C16.4942 38.3489 16.4504 38.3207 16.4188 38.281C16.3872 38.2412 16.3695 38.192 16.3685 38.141C16.3668 38.0968 16.3799 38.0533 16.4056 38.0174C16.4314 37.9815 16.4683 37.9553 16.5106 37.9431H16.6417C16.6869 37.9305 16.7349 37.9321 16.7792 37.9478C16.8234 37.9635 16.8618 37.9925 16.8892 38.0309C16.9166 38.0692 16.9317 38.1151 16.9323 38.1623C16.933 38.2096 16.9193 38.2559 16.893 38.295C16.8713 38.3264 16.8415 38.3511 16.8069 38.3667C16.7722 38.3822 16.734 38.3878 16.6963 38.383"
        fill="#DAC6A1"
      />
      <path
        d="M22.3671 38.438C22.3314 38.4453 22.2945 38.443 22.26 38.4315C22.2255 38.4199 22.1946 38.3994 22.1704 38.372C22.1563 38.339 22.149 38.3034 22.149 38.2675C22.149 38.2316 22.1563 38.196 22.1704 38.163C22.193 38.1046 22.2299 38.0528 22.2776 38.0124C22.3254 37.972 22.3824 37.9444 22.4436 37.9321H22.531C22.6402 37.9321 22.7058 38.0201 22.7058 38.119C22.704 38.1765 22.6867 38.2323 22.656 38.2807C22.6252 38.3291 22.582 38.3683 22.531 38.394C22.4847 38.4084 22.4352 38.4084 22.3889 38.394"
        fill="#DAC6A1"
      />
      <path
        d="M17.2863 37.9211H17.1771L16.9039 37.7451C16.8941 37.7305 16.8888 37.7133 16.8888 37.6956C16.8888 37.678 16.8941 37.6607 16.9039 37.6461C17.2733 37.3055 17.7395 37.0901 18.2369 37.0303C18.3462 37.0303 18.3899 37.0963 18.4118 37.1733C18.4221 37.2356 18.4116 37.2996 18.382 37.3553C18.3523 37.4111 18.3051 37.4553 18.2479 37.4812C17.96 37.5145 17.6874 37.6289 17.4612 37.8111C17.4353 37.8467 17.4027 37.8767 17.3652 37.8993C17.3276 37.922 17.286 37.9369 17.2426 37.9431"
        fill="#DAC6A1"
      />
      <path
        d="M21.8426 37.9871C21.8426 37.9871 21.8426 37.9871 21.7661 37.9871C21.5145 37.7522 21.2052 37.589 20.8702 37.5142C20.8702 37.5142 20.7828 37.5142 20.7828 37.3932C20.7828 37.2722 20.7828 37.0963 20.7828 37.0853C21.301 37.1189 21.7915 37.3327 22.1704 37.6901V37.8221L21.8972 38.0091L21.8426 37.9871Z"
        fill="#DAC6A1"
      />
      <path
        d="M20.9794 39.9996C20.949 40.0014 20.9185 39.9965 20.8902 39.9851C20.8618 39.9736 20.8364 39.9561 20.8155 39.9337C20.4615 39.7403 20.0967 39.5677 19.7229 39.4168C19.6827 39.3902 19.6524 39.351 19.6366 39.3052C19.6207 39.2595 19.6204 39.2098 19.6355 39.1638C19.6553 39.0935 19.6946 39.0303 19.7488 38.9816C19.8029 38.9329 19.8698 38.9007 19.9414 38.8889H20.0288C20.2082 39.0003 20.3986 39.0924 20.597 39.1638C20.812 39.2346 21.0147 39.3384 21.198 39.4718C21.2451 39.4978 21.2803 39.5411 21.2963 39.5927C21.3057 39.625 21.3057 39.6594 21.2963 39.6917L21.1324 39.9117C21.0901 39.952 21.0369 39.9787 20.9794 39.9886"
        fill="#DAC6A1"
      />
      <path
        d="M16.8165 39.6697H16.7619C16.7619 39.6697 16.7619 39.5927 16.7619 39.5157C16.7619 38.9329 17.3301 38.5809 17.8545 38.207L18.4008 37.8221C18.4506 37.7801 18.5113 37.7534 18.5757 37.7451C18.5757 37.7451 18.6303 37.7451 18.6521 37.7451L18.9362 37.9101C18.9362 37.9101 19.0018 37.9101 19.0018 37.9761C18.9967 38.0149 18.9772 38.0502 18.9471 38.0751C18.7665 38.2329 18.5686 38.3694 18.3571 38.482C17.9913 38.6572 17.6811 38.9314 17.4612 39.2738C17.3036 39.481 17.0727 39.6189 16.8165 39.6587V39.6697Z"
        fill="#DAC6A1"
      />
      <path
        d="M18.3899 39.9447H18.2697L17.9966 39.7137C17.8982 39.5927 17.9091 39.4718 18.073 39.3068C18.2933 39.0872 18.5391 38.8951 18.8051 38.7349C19.0792 38.5549 19.3353 38.3487 19.5699 38.119C19.601 38.069 19.6425 38.0264 19.6915 37.9941C19.7406 37.9618 19.796 37.9407 19.854 37.9321H20.1163C20.2037 37.9321 20.3129 37.9321 20.3348 37.9321C20.3566 37.9321 20.2474 38.174 20.2146 38.24C19.9458 38.5665 19.6244 38.8453 19.264 39.0648C18.9483 39.2405 18.6786 39.4893 18.4773 39.7907C18.4773 39.9117 18.379 39.9337 18.3462 39.9337"
        fill="#DAC6A1"
      />
      <path
        d="M22.3671 39.4828H22.1813C22.0494 39.4507 21.9308 39.3776 21.8426 39.2738C21.7139 39.1408 21.5621 39.0327 21.3946 38.9549L21.0122 38.8449C20.8507 38.7871 20.6936 38.7173 20.5424 38.6359C20.511 38.6259 20.4831 38.6072 20.4618 38.5819C20.4406 38.5566 20.4268 38.5258 20.4222 38.493C20.4222 38.405 20.4878 38.262 20.5752 38.152C20.6626 38.0421 20.6516 38.0641 20.6954 38.0641C20.7384 38.0529 20.7835 38.0529 20.8265 38.0641C20.9938 38.1791 21.1734 38.275 21.3619 38.35C21.8768 38.5208 22.3245 38.8521 22.6402 39.2958C22.6494 39.3244 22.6494 39.3552 22.6402 39.3838C22.6324 39.3981 22.6214 39.4105 22.6082 39.42C22.5949 39.4295 22.5798 39.4359 22.5637 39.4388H22.3234"
        fill="#DAC6A1"
      />
      <path
        d="M14.7187 37.2722C14.9918 37.2722 15.1557 37.2722 15.2103 37.4262C15.2236 37.4749 15.2255 37.526 15.2161 37.5756C15.2066 37.6251 15.1859 37.6719 15.1557 37.7121C15.0902 37.8221 15.1557 37.8881 15.1557 37.9211C15.1702 37.931 15.1873 37.9363 15.2049 37.9363C15.2224 37.9363 15.2396 37.931 15.2541 37.9211C15.3961 37.9211 15.5709 37.7561 15.6583 37.4592C15.6583 37.3382 15.7894 37.2612 16.008 37.2062C16.0661 37.1784 16.1136 37.1321 16.1432 37.0745C16.1728 37.0169 16.1829 36.9512 16.1719 36.8873C16.1719 36.7883 16.0954 36.7224 16.0298 36.7333C16.0119 36.7346 15.9945 36.7402 15.9793 36.7498C15.964 36.7594 15.9514 36.7726 15.9424 36.7883C15.8495 36.8819 15.732 36.9468 15.6037 36.9753H15.4726C15.361 36.9929 15.2467 36.9774 15.1438 36.9305C15.0409 36.8836 14.9539 36.8074 14.8935 36.7114L14.5329 36.1175C14.4783 36.0405 14.4346 36.0075 14.3909 36.0075C14.3752 36.042 14.367 36.0795 14.367 36.1175C14.367 36.1554 14.3752 36.193 14.3909 36.2275L14.5766 36.5794C14.5954 36.6252 14.5954 36.6766 14.5766 36.7224C14.5766 36.7224 14.4783 36.7883 14.4237 36.7993C14.149 36.8036 13.8782 36.7334 13.6398 36.596C13.4014 36.4586 13.2042 36.2591 13.0688 36.0185C13.0688 35.9415 12.9486 35.8975 12.9049 35.9085C12.8818 35.9649 12.8818 36.0281 12.9049 36.0845L13.0906 36.3594C13.1562 36.4364 13.1562 36.4694 13.1453 36.4914C13.113 36.4993 13.0792 36.4993 13.0469 36.4914C12.5519 36.4868 12.0749 36.3034 11.703 35.9745C11.653 35.9604 11.6001 35.9604 11.55 35.9745C11.4845 36.0405 11.4845 36.0735 11.55 36.1285L11.6156 36.2934C11.6259 36.3294 11.6259 36.3675 11.6156 36.4034C11.6156 36.4034 11.561 36.4034 11.5063 36.4034L10.7633 36.4914C10.6541 36.4914 10.5885 36.4914 10.5885 36.5904C10.5885 36.6894 10.6869 36.7004 10.8617 36.6894C11.4233 36.6176 11.9931 36.6474 12.5443 36.7773C12.5443 36.7773 12.6208 36.7773 12.6317 36.7773C12.6452 36.8127 12.6452 36.8519 12.6317 36.8873L12.3586 37.1733C12.2821 37.2392 12.2493 37.3052 12.2602 37.3602C12.2764 37.3711 12.2954 37.3769 12.3149 37.3769C12.3343 37.3769 12.3533 37.3711 12.3695 37.3602H12.4569C12.7604 37.1349 13.1122 36.9842 13.484 36.9203C13.5743 36.9036 13.6669 36.9036 13.7571 36.9203C13.788 36.9205 13.818 36.93 13.8434 36.9477C13.8687 36.9653 13.8882 36.9903 13.8992 37.0193C13.9155 37.0477 13.9241 37.0799 13.9241 37.1128C13.9241 37.1456 13.9155 37.1778 13.8992 37.2062L13.626 37.7451C13.626 37.8331 13.626 37.8991 13.626 37.9321C13.6844 37.9252 13.7385 37.898 13.779 37.8551C14.0194 37.5692 14.3253 37.2502 14.6313 37.2282L14.7187 37.2722ZM14.5657 38.7569C14.5264 38.7626 14.4863 38.7574 14.4498 38.7419C14.4132 38.7264 14.3815 38.7012 14.3581 38.6689C14.3472 38.6447 14.3416 38.6185 14.3416 38.5919C14.3416 38.5654 14.3472 38.5392 14.3581 38.515L14.6203 38.0641C14.6349 38.0411 14.6427 38.0144 14.6427 37.9871C14.6427 37.9598 14.6349 37.9331 14.6203 37.9101C14.6037 37.9004 14.5849 37.8954 14.5657 37.8954C14.5465 37.8954 14.5277 37.9004 14.5111 37.9101C14.4035 37.9236 14.3055 37.9788 14.2379 38.0641C13.9613 38.3957 13.5716 38.6114 13.1453 38.6689C13.0436 38.6799 12.941 38.6799 12.8393 38.6689C12.7301 38.6689 12.6645 38.6249 12.6427 38.537C12.6427 38.471 12.6427 38.405 12.7082 38.306L13.036 37.8881C13.036 37.7891 13.036 37.7341 13.036 37.7011H12.8503L12.0417 38.0971C11.9626 38.1361 11.8778 38.1621 11.7904 38.174C11.7089 38.1819 11.6267 38.17 11.5507 38.1394C11.4747 38.1088 11.407 38.0604 11.3534 37.9981C11.317 37.9676 11.2936 37.9244 11.2878 37.8771H11.3424C11.486 37.7822 11.6087 37.6587 11.703 37.5142C11.7174 37.4891 11.725 37.4607 11.725 37.4317C11.725 37.4027 11.7174 37.3743 11.703 37.3492C11.703 37.3492 11.6265 37.2722 11.5173 37.2722L10.7196 37.3712C10.4008 37.4318 10.0715 37.4013 9.76905 37.2832C9.73472 37.2633 9.70641 37.2344 9.68716 37.1995C9.66792 37.1646 9.65845 37.1251 9.65979 37.0853C9.65979 36.9973 9.7472 36.9093 9.92202 36.7883L10.7306 36.4694C10.764 36.4599 10.795 36.4431 10.8214 36.4203C10.8479 36.3975 10.869 36.3693 10.8835 36.3374C10.885 36.3073 10.8787 36.2774 10.8653 36.2504C10.8519 36.2234 10.8318 36.2004 10.807 36.1835C10.807 36.1835 10.807 36.0955 10.807 36.0515C10.8276 35.9991 10.8665 35.9561 10.9163 35.9305C11.0113 35.8681 11.1202 35.8304 11.2332 35.8205C11.5711 35.8323 11.8918 35.974 12.1291 36.2165C12.1725 36.2439 12.2207 36.2626 12.2712 36.2714C12.2965 36.2448 12.3107 36.2094 12.3107 36.1725C12.3107 36.1356 12.2965 36.1001 12.2712 36.0735L12.1728 35.7436C12.1728 35.6666 12.1728 35.6006 12.1728 35.5676C12.2105 35.5287 12.2611 35.5052 12.3149 35.5016C12.741 35.5016 13.1234 35.6996 13.5714 36.2495C13.5968 36.2855 13.6293 36.3158 13.6669 36.3385C13.7045 36.3612 13.7464 36.3758 13.7899 36.3814H13.8446C13.8542 36.3378 13.8544 36.2926 13.8449 36.2489C13.8355 36.2052 13.8167 36.1641 13.7899 36.1285L13.6479 35.8096C13.6338 35.7766 13.6265 35.741 13.6265 35.7051C13.6265 35.6691 13.6338 35.6336 13.6479 35.6006C13.6753 35.5686 13.7087 35.5424 13.7462 35.5236C13.7837 35.5047 13.8246 35.4935 13.8664 35.4906H14.0412C14.3362 35.4906 14.5111 35.5456 14.5657 35.7436L14.9809 36.4474C15.0026 36.4877 15.034 36.5219 15.0721 36.5468C15.1103 36.5718 15.154 36.5868 15.1994 36.5904C15.2868 36.5904 15.3633 36.5134 15.4507 36.3814C15.5381 36.2495 15.5491 36.2385 15.5818 36.2385C15.6146 36.2385 15.9315 36.3594 16.2265 36.6344C16.2766 36.6878 16.3379 36.7294 16.4059 36.756C16.474 36.7826 16.547 36.7937 16.6198 36.7883C16.7075 36.7858 16.7934 36.7632 16.8711 36.7224C17.1908 36.5702 17.5349 36.477 17.8873 36.4474C18.0322 36.4254 18.1795 36.4254 18.3243 36.4474C18.3489 36.4514 18.3724 36.4603 18.3935 36.4736C18.4146 36.4869 18.4328 36.5043 18.4471 36.5248C18.4614 36.5453 18.4714 36.5685 18.4766 36.593C18.4818 36.6175 18.482 36.6428 18.4773 36.6674C18.4773 36.7883 18.3134 36.9203 18.0403 36.9423H17.7562C17.3307 37.0501 16.9348 37.2531 16.598 37.5362C16.4982 37.6249 16.3705 37.6755 16.2374 37.6791C16.1675 37.6845 16.0999 37.7072 16.0407 37.7451C15.9096 37.7451 15.7785 37.9211 15.6037 38.13C15.3519 38.5256 14.9621 38.812 14.5111 38.9329"
        fill="#DAC6A1"
      />
      <path
        d="M7.97714 34.4458C8.16288 34.4458 8.28307 34.4458 8.3377 34.5668C8.34506 34.6031 8.34506 34.6405 8.3377 34.6768C8.3377 34.7758 8.33771 34.9077 8.49067 34.8967H9.1244C9.18996 34.8967 9.22274 34.8967 9.24459 34.8418C9.26644 34.7868 9.24459 34.7648 9.24459 34.7098C9.1244 34.4568 9.04791 34.4128 8.92773 34.4238H8.85124C8.79054 34.4413 8.7262 34.4413 8.66549 34.4238C8.39234 34.2809 8.28307 33.841 8.31585 33.0711C8.33028 33.0421 8.33779 33.0101 8.33779 32.9777C8.33779 32.9452 8.33028 32.9132 8.31585 32.8842C8.25029 32.8842 8.21752 32.8842 8.20659 33.0601L8.06455 33.3461C8.06455 33.511 7.98806 33.511 7.96621 33.522H7.84602C7.68021 33.4182 7.53805 33.2802 7.42885 33.1172C7.31964 32.9543 7.24585 32.7699 7.2123 32.5762C7.2123 32.4113 7.2123 31.6195 6.97192 32.1143C6.87358 32.1803 6.70969 31.8724 6.60042 31.6414C6.49116 31.4105 6.53487 31.5095 6.48023 31.5095C6.4537 31.5299 6.43275 31.5567 6.41937 31.5875C6.40599 31.6183 6.40061 31.652 6.40375 31.6854C6.41152 31.7256 6.40853 31.7672 6.39509 31.8058C6.38165 31.8445 6.35824 31.8788 6.32727 31.9054C6.25078 31.9054 6.18522 31.9714 6.19615 32.0264C6.20708 32.0813 6.19615 32.0923 6.34912 32.1143C6.50209 32.1363 6.82988 32.4553 7.03748 32.9942C7.04918 33.0261 7.04918 33.0612 7.03748 33.0931H6.20708C6.10874 33.0931 6.08689 33.0931 6.08689 33.1701C6.08689 33.2471 6.18522 33.3131 6.29449 33.3241L7.05933 33.4341C7.1857 33.4331 7.30965 33.4689 7.41627 33.5372C7.52289 33.6055 7.60762 33.7033 7.66027 33.819C7.71491 33.918 7.73676 33.9949 7.71491 34.0389C7.70925 34.0558 7.69916 34.0709 7.6857 34.0825C7.67223 34.0941 7.6559 34.1019 7.63842 34.1049C7.35955 34.1974 7.07483 34.2708 6.78617 34.3249C6.66598 34.3249 6.61135 34.3249 6.60042 34.4128C6.5895 34.5008 6.60042 34.5118 6.80802 34.5668C6.91288 34.5849 7.02003 34.5849 7.12489 34.5668C7.27197 34.55 7.41792 34.5243 7.56194 34.4898C7.69918 34.4656 7.8379 34.4509 7.97714 34.4458ZM10.512 35.7765C10.4619 35.7901 10.4092 35.7901 10.3591 35.7765C10.1317 35.5772 9.86577 35.4274 9.57807 35.3366C9.29037 35.2457 8.9871 35.2158 8.68735 35.2487C8.44639 35.2718 8.20841 35.3197 7.97714 35.3916C7.95508 35.39 7.93371 35.3831 7.91474 35.3717C7.89577 35.3602 7.87972 35.3445 7.86787 35.3256C7.84366 35.2506 7.84366 35.1698 7.86787 35.0947C7.86787 34.9517 7.81324 34.8857 7.69305 34.8967H7.256C6.98297 34.9581 6.69775 34.9329 6.43951 34.8246C6.18127 34.7163 5.96267 34.5302 5.81373 34.2919C5.79779 34.2493 5.79779 34.2024 5.81373 34.1599C5.81373 34.1599 5.81373 34.1599 5.93392 34.1599L6.91729 34.0389C6.93935 34.0392 6.96121 34.0346 6.98135 34.0255C7.00149 34.0164 7.01944 34.0031 7.03398 33.9864C7.04851 33.9696 7.05927 33.95 7.06554 33.9287C7.0718 33.9074 7.07341 33.885 7.07025 33.863C7.07025 33.863 7.07025 33.731 6.92821 33.709C5.94485 33.544 5.35482 33.2581 5.16908 32.8292C5.15886 32.8048 5.1536 32.7786 5.1536 32.7522C5.1536 32.7258 5.15886 32.6996 5.16908 32.6752C5.16908 32.6752 5.24556 32.6752 5.33297 32.6752L6.08689 32.7412C6.20708 32.7412 6.26171 32.7412 6.27263 32.6642C6.28356 32.5872 6.27263 32.5652 6.13059 32.4993L5.37668 32.0813C5.34548 32.0601 5.32146 32.0297 5.30779 31.9944C5.29413 31.959 5.29148 31.9203 5.30019 31.8834C5.30019 31.8064 5.42038 31.7624 5.5515 31.7514H5.84651C5.88879 31.7542 5.93117 31.7478 5.97076 31.7326C6.01035 31.7174 6.04624 31.6938 6.07596 31.6634C6.16337 31.5755 6.16337 31.4215 6.15244 31.1795V30.9486C6.15244 30.7836 6.15244 30.6847 6.23986 30.6737C6.32727 30.6627 6.39282 30.6737 6.6332 31.0476C6.75339 31.1905 6.82988 31.2675 6.89543 31.2565C6.96099 31.2455 7.03748 31.1026 7.09211 30.8496C7.14674 30.5967 7.17952 30.7176 7.19044 30.7176C7.25558 30.7231 7.31707 30.7502 7.36527 30.7946C7.6712 30.9706 7.6712 31.7404 7.63842 32.4663C7.62821 32.4906 7.62294 32.5168 7.62294 32.5432C7.62294 32.5697 7.62821 32.5959 7.63842 32.6202C7.6736 32.6338 7.71251 32.6338 7.74768 32.6202C7.74768 32.6202 7.88973 32.6202 7.91158 32.4003L8.02084 31.9164C8.02084 31.7844 8.10825 31.7184 8.19566 31.7074C8.29871 31.7112 8.39643 31.7545 8.46882 31.8284C8.7529 32.0813 8.82939 32.4993 8.79661 33.5C8.79395 33.5324 8.79844 33.565 8.80978 33.5954C8.82111 33.6259 8.83901 33.6534 8.86217 33.676C8.89405 33.6869 8.92862 33.6869 8.9605 33.676C9.03699 33.676 9.1244 33.61 9.17903 33.4451C9.23366 33.2801 9.25551 33.3461 9.25551 33.3461C9.25551 33.3461 9.332 33.3461 9.3757 33.511C9.4046 33.8933 9.51763 34.2644 9.70661 34.5972C9.8956 34.9301 10.1558 35.2165 10.4683 35.4356C10.4978 35.4605 10.5189 35.4939 10.5287 35.5314C10.5385 35.5688 10.5365 35.6083 10.523 35.6446C10.5157 35.6667 10.5028 35.6864 10.4856 35.7019C10.4683 35.7173 10.4473 35.7279 10.4246 35.7326"
        fill="#DAC6A1"
      />
      <path
        d="M10.2826 33.9839C10.2362 33.9838 10.1911 33.9687 10.1538 33.9411C10.1165 33.9134 10.0889 33.8745 10.075 33.83C10.0643 33.7934 10.0638 33.7547 10.0734 33.7178C10.083 33.681 10.1025 33.6475 10.1296 33.621C10.2155 33.5461 10.3224 33.4999 10.4356 33.4891C10.4755 33.48 10.5171 33.4824 10.5558 33.496C10.5944 33.5096 10.6285 33.5339 10.6541 33.566C10.6822 33.5896 10.7033 33.6206 10.7149 33.6556C10.7265 33.6906 10.7281 33.7281 10.7196 33.764C10.6731 33.8342 10.6096 33.8912 10.535 33.9297C10.4604 33.9682 10.3773 33.9869 10.2935 33.9839H10.2826Z"
        fill="#DAC6A1"
      />
      <path
        d="M8.41419 36.3814H8.294C8.23802 36.3569 8.18994 36.3172 8.15519 36.2667C8.12044 36.2161 8.1004 36.1569 8.09733 36.0955C8.09517 36.0435 8.10488 35.9916 8.12572 35.944C8.14655 35.8963 8.17795 35.8541 8.21752 35.8205H8.40326C8.55623 35.8205 8.65457 35.9415 8.69827 36.1835C8.69827 36.243 8.6791 36.3008 8.64364 36.3484C8.57927 36.4031 8.49837 36.4341 8.41419 36.4364"
        fill="#DAC6A1"
      />
      <path
        d="M10.9272 35.4026C10.8617 35.4026 10.7196 35.3037 10.5776 35.0727C10.5353 34.9847 10.4757 34.9062 10.4025 34.842C10.3292 34.7777 10.2439 34.729 10.1515 34.6988C10.0947 34.6788 10.0469 34.6389 10.0168 34.5864C9.98672 34.534 9.97635 34.4724 9.98758 34.4128C9.99741 34.3643 10.0233 34.3204 10.0609 34.2885C10.0986 34.2566 10.1459 34.2384 10.1952 34.2369H10.2826C10.4296 34.2236 10.5735 34.1865 10.7087 34.1269H10.8398C10.8873 34.1187 10.9362 34.1273 10.9781 34.1514C11.02 34.1755 11.0522 34.2135 11.0693 34.2589C11.0849 34.3019 11.0881 34.3485 11.0784 34.3933C11.0687 34.4381 11.0466 34.4792 11.0146 34.5118C10.9466 34.5545 10.8947 34.6187 10.867 34.6944C10.8393 34.7701 10.8374 34.8529 10.8617 34.9297C10.9534 35.0772 10.992 35.2519 10.9709 35.4246L10.9272 35.4026Z"
        fill="#DAC6A1"
      />
      <path
        d="M9.1244 36.5024C9.07829 36.5091 9.03135 36.4981 8.9929 36.4717C8.95444 36.4452 8.92728 36.4051 8.9168 36.3594C8.92501 36.1971 8.89506 36.0351 8.82939 35.8865C8.79855 35.8351 8.78225 35.7761 8.78225 35.7161C8.78225 35.656 8.79855 35.597 8.82939 35.5456C8.84556 35.5128 8.87047 35.4851 8.90133 35.4657C8.9322 35.4463 8.96781 35.4359 9.00421 35.4356C9.07766 35.4291 9.15107 35.4485 9.21181 35.4906C9.27601 35.5581 9.35462 35.61 9.4417 35.6424C9.52878 35.6748 9.62204 35.6868 9.71442 35.6776C9.78834 35.6622 9.86468 35.6631 9.93822 35.6802C10.0118 35.6973 10.0808 35.7302 10.1405 35.7766C10.2061 35.7766 10.217 35.8755 10.2061 35.8975H10.0531C9.92822 35.8969 9.80564 35.9316 9.69939 35.9977C9.59313 36.0639 9.50748 36.1587 9.45219 36.2714C9.42926 36.3276 9.39186 36.3766 9.34384 36.4133C9.29582 36.45 9.23892 36.4732 9.17903 36.4804"
        fill="#DAC6A1"
      />
      <path
        d="M3.44272 29.4859C3.36624 29.4859 3.33346 29.4859 3.33346 29.5739C3.33346 29.6619 3.33346 29.6729 3.45365 29.6729C3.74866 29.6729 4.01089 29.6729 4.13108 29.8048C4.16133 29.8414 4.20432 29.865 4.25127 29.8708V29.8158C4.26371 29.7921 4.27021 29.7657 4.27021 29.7389C4.27021 29.712 4.26371 29.6856 4.25127 29.6619C4.12015 29.4969 4.16386 29.299 4.38238 29.013C4.40555 28.9904 4.42344 28.9629 4.43477 28.9324C4.44611 28.902 4.45061 28.8694 4.44794 28.8371H4.28405C4.23358 28.8474 4.18155 28.8474 4.13108 28.8371C4.07827 28.8464 4.02391 28.8412 3.97386 28.8218C3.9238 28.8024 3.87994 28.7697 3.84699 28.7271C3.79466 28.6172 3.76749 28.497 3.76749 28.3752C3.76749 28.2533 3.79466 28.1331 3.84699 28.0232C3.95626 27.6823 4.08737 27.3194 4.20756 26.9235C4.20756 26.8575 4.20756 26.7805 4.20756 26.7365C4.17646 26.7418 4.14754 26.7561 4.12428 26.7775C4.10102 26.799 4.08441 26.8268 4.07645 26.8575C3.98904 27.0554 3.91255 27.2314 3.85792 27.3964C3.80329 27.5613 3.6831 27.8693 3.58476 27.8803C3.48643 27.8913 3.2679 27.6053 3.13679 27.3964C3.06602 27.2646 3.02896 27.1172 3.02896 26.9675C3.02896 26.8177 3.06602 26.6703 3.13679 26.5385C3.14791 26.5125 3.15364 26.4844 3.15364 26.4561C3.15364 26.4277 3.14791 26.3996 3.13679 26.3736H3.07123C3.07123 26.3736 2.99474 26.3736 2.97289 26.4616C2.95104 26.5495 2.81992 26.6925 2.76529 26.7035C2.71066 26.7145 2.57954 26.5935 2.44843 26.4286C2.41976 26.3976 2.38097 26.3781 2.33917 26.3736C2.31023 26.3759 2.28254 26.3864 2.25933 26.4039C2.23611 26.4214 2.21833 26.4452 2.20805 26.4726C2.18964 26.5023 2.17988 26.5365 2.17988 26.5715C2.17988 26.6065 2.18964 26.6408 2.20805 26.6705L2.27361 26.7255C2.3938 26.8465 2.61232 27.0554 2.59047 27.1104C2.48173 27.1256 2.37142 27.1256 2.26268 27.1104H2.15342C2.08786 27.1104 2.05508 27.1654 2.05508 27.1984C2.05508 27.2314 2.05508 27.2974 2.19712 27.3194C2.8527 27.3744 3.35531 27.8913 3.28975 28.1882C3.28975 28.2982 3.19142 28.3532 3.0603 28.3642C2.90462 28.3705 2.74909 28.3481 2.6014 28.2982H2.55769C2.53116 28.3002 2.50605 28.311 2.48627 28.3289C2.4665 28.3468 2.45319 28.3708 2.44843 28.3971C2.44843 28.3971 2.44843 28.5181 2.61232 28.5291C3.31161 28.5291 3.80329 28.969 3.79236 29.222C3.78144 29.4749 3.60662 29.4419 3.46457 29.4749L3.44272 29.4859ZM5.70447 31.4215H5.57335C5.15781 31.2136 4.78665 30.9259 4.48072 30.5747C4.40295 30.4305 4.29187 30.3073 4.15685 30.2154C4.02183 30.1236 3.86684 30.0657 3.70495 30.0468C3.24484 30.0241 2.81252 29.8184 2.50306 29.4749C2.44843 29.3979 2.50306 29.3649 2.50306 29.3539C2.50306 29.3429 2.50306 29.3539 2.62325 29.3539H2.95104C3.07123 29.3539 3.09308 29.299 3.09308 29.277C3.09308 29.255 3.02752 29.123 2.89641 29.09C2.00045 28.936 1.55247 28.6831 1.50877 28.2982C1.50877 28.1992 1.50877 28.1442 1.50877 28.1112C1.50877 28.0782 1.57432 28.1112 1.66173 28.0452H1.93489C1.95471 28.0398 1.97298 28.0298 1.98825 28.016C2.00352 28.0022 2.01535 27.9849 2.02279 27.9657C2.03023 27.9464 2.03307 27.9257 2.03109 27.9051C2.02911 27.8845 2.02236 27.8647 2.01138 27.8473C2.01138 27.8473 2.01138 27.7703 1.82563 27.7043C1.53209 27.6103 1.27079 27.435 1.07171 27.1984C1.0478 27.1546 1.03527 27.1054 1.03527 27.0554C1.03527 27.0055 1.0478 26.9563 1.07171 26.9125C1.08806 26.8838 1.1121 26.8603 1.14109 26.8448C1.17008 26.8292 1.20284 26.8222 1.23561 26.8245C1.28239 26.814 1.33087 26.814 1.37765 26.8245C1.44177 26.8441 1.51021 26.8441 1.57432 26.8245C1.59685 26.8249 1.61904 26.8189 1.63836 26.8073C1.65768 26.7956 1.67335 26.7787 1.68359 26.7585C1.68359 26.6815 1.68359 26.5495 1.54155 26.4286C1.52697 26.3976 1.5194 26.3638 1.5194 26.3296C1.5194 26.2954 1.52697 26.2615 1.54155 26.2306C1.56836 26.2025 1.60061 26.1802 1.63631 26.165C1.67201 26.1499 1.71041 26.1423 1.74914 26.1426C1.80704 26.1521 1.86607 26.1521 1.92397 26.1426C2.05363 26.125 2.17327 26.0628 2.26268 25.9667C2.29653 25.9369 2.33832 25.9178 2.38287 25.9117C2.45935 25.9117 2.53584 25.9117 2.6014 26.0766C2.66695 26.2416 2.74344 26.3626 2.86363 26.3516C2.98382 26.3406 2.99474 26.3516 3.03845 26.1316C3.08215 25.9117 3.15864 25.8017 3.25697 25.7907C3.31276 25.7906 3.36684 25.8101 3.40994 25.8457C3.60662 25.9557 3.61754 26.2856 3.40994 26.8355C3.38375 26.9026 3.38375 26.9773 3.40994 27.0444H3.4755C3.57384 27.0444 3.6831 26.9125 3.73773 26.7365C3.73773 26.3186 3.91255 26.0986 4.10923 26.0876H4.25127C4.31483 26.0963 4.37554 26.1197 4.42862 26.156C4.4817 26.1922 4.52571 26.2404 4.5572 26.2966C4.72037 26.8094 4.67722 27.3661 4.43702 27.8473C4.41758 27.8885 4.40749 27.9336 4.40749 27.9792C4.40749 28.0249 4.41758 28.07 4.43702 28.1112C4.47582 28.1255 4.5184 28.1255 4.5572 28.1112C4.62636 28.096 4.68815 28.0571 4.73203 28.0012C4.7953 27.9272 4.87894 27.8736 4.9724 27.8473C4.98954 27.8394 5.00818 27.8353 5.02704 27.8353C5.04589 27.8353 5.06453 27.8394 5.08167 27.8473C5.12863 27.9391 5.15313 28.0409 5.15313 28.1442C5.15313 28.2475 5.12863 28.3493 5.08167 28.4411C4.91467 28.6506 4.79751 28.8957 4.73917 29.1577C4.68083 29.4198 4.68284 29.6918 4.74507 29.9529C4.80729 30.214 4.92807 30.4574 5.09815 30.6643C5.26824 30.8712 5.48311 31.0361 5.72632 31.1466C5.75926 31.1719 5.78479 31.2057 5.80018 31.2444C5.81557 31.2831 5.82025 31.3253 5.81373 31.3665C5.80317 31.3874 5.78768 31.4053 5.76863 31.4187C5.74958 31.4321 5.72755 31.4406 5.70447 31.4435"
        fill="#DAC6A1"
      />
      <path
        d="M5.48594 30.7946C5.48594 30.7946 5.3876 30.7946 5.37668 30.6737C5.37668 30.1678 5.25649 29.8818 5.11445 29.7609C5.08861 29.7117 5.07511 29.657 5.07511 29.6014C5.07511 29.5458 5.08861 29.4911 5.11445 29.4419C5.12992 29.4149 5.15224 29.3926 5.17911 29.3771C5.20599 29.3617 5.23646 29.3537 5.26741 29.3539H5.36575C5.56003 29.4366 5.76702 29.485 5.97762 29.4969C6.02973 29.4985 6.07976 29.5178 6.11948 29.5518C6.1592 29.5858 6.18624 29.6324 6.19615 29.6839C6.20475 29.7232 6.19967 29.7643 6.18177 29.8004C6.16388 29.8364 6.13424 29.8651 6.09781 29.8818C6.03024 29.8923 5.96549 29.9165 5.90754 29.9531C5.84959 29.9896 5.79966 30.0376 5.76079 30.0943C5.72193 30.1509 5.69495 30.2149 5.68151 30.2824C5.66806 30.3498 5.66844 30.4194 5.68261 30.4867C5.68261 30.6847 5.58428 30.7836 5.50779 30.7946"
        fill="#DAC6A1"
      />
      <path
        d="M5.85743 29.189H5.71539C5.56242 29.189 5.46409 29.09 5.45316 28.969C5.45418 28.9085 5.47357 28.8497 5.50872 28.8006C5.54387 28.7514 5.59311 28.7143 5.64983 28.6941H5.8028C5.8452 28.6851 5.88911 28.6864 5.9309 28.6979C5.9727 28.7094 6.01118 28.7307 6.04318 28.7601C6.07367 28.7981 6.09537 28.8426 6.1067 28.8901C6.11804 28.9377 6.11874 28.9872 6.10874 29.035C6.09195 29.0881 6.05822 29.1341 6.01278 29.166C5.96734 29.1978 5.91273 29.2136 5.85743 29.211"
        fill="#DAC6A1"
      />
      <path
        d="M3.40994 31.3335C3.35234 31.3401 3.2944 31.3244 3.24778 31.2898C3.20116 31.2551 3.16931 31.2039 3.15864 31.1466C3.12397 31.0884 3.10565 31.0219 3.10565 30.9541C3.10565 30.8863 3.12397 30.8198 3.15864 30.7616C3.17991 30.7243 3.20996 30.6927 3.24614 30.6697C3.28233 30.6467 3.32356 30.6329 3.36624 30.6297C3.42943 30.6264 3.49154 30.6472 3.54015 30.688C3.58876 30.7287 3.6203 30.7865 3.62847 30.8496C3.65166 30.8976 3.66371 30.9502 3.66371 31.0036C3.66371 31.0569 3.65166 31.1096 3.62847 31.1575C3.60531 31.1933 3.57478 31.2235 3.53896 31.2463C3.50314 31.2691 3.46286 31.2838 3.42087 31.2895"
        fill="#DAC6A1"
      />
      <path
        d="M3.96718 31.6964C3.93426 31.697 3.90161 31.6904 3.87145 31.6771C3.84128 31.6638 3.81431 31.6442 3.79236 31.6195C3.77894 31.596 3.77187 31.5695 3.77187 31.5425C3.77187 31.5154 3.77894 31.4889 3.79236 31.4655C3.82772 31.2654 3.82772 31.0607 3.79236 30.8606C3.7919 30.7902 3.81729 30.722 3.86366 30.6692C3.91004 30.6165 3.97414 30.5828 4.04367 30.5747C4.09032 30.5731 4.13649 30.5845 4.17702 30.6079C4.21755 30.6312 4.25082 30.6654 4.27312 30.7066C4.30829 30.7962 4.36134 30.8776 4.429 30.9457C4.49666 31.0138 4.57748 31.0672 4.66647 31.1026C4.9724 31.2565 5.05981 31.3995 5.04889 31.4545C5.03007 31.4633 5.00956 31.4679 4.98879 31.4679C4.96803 31.4679 4.94751 31.4633 4.9287 31.4545C4.89248 31.4599 4.85566 31.4599 4.81944 31.4545C4.70338 31.3869 4.57109 31.3526 4.43702 31.3555C4.39268 31.358 4.3496 31.3713 4.31152 31.3943C4.27345 31.4173 4.24151 31.4493 4.21849 31.4875C4.18374 31.5309 4.1407 31.5669 4.09191 31.5934C4.04312 31.6198 3.98957 31.6362 3.93441 31.6414"
        fill="#DAC6A1"
      />
      <path
        d="M0.831336 21.6446C0.831336 21.6446 0.831336 21.7106 0.831336 21.8316C1.04986 22.1835 1.27931 22.6124 1.20283 22.8323C1.189 22.8658 1.16818 22.8959 1.14179 22.9206C1.1154 22.9452 1.08405 22.9639 1.04986 22.9753C1.04986 22.9753 0.90782 22.9753 0.885967 23.0523C0.880662 23.0789 0.882981 23.1065 0.892655 23.1318C0.902328 23.1571 0.918957 23.1791 0.940599 23.1953C0.998798 23.2601 1.07487 23.3061 1.15912 23.3272C1.32302 23.4042 1.42136 23.4592 1.34487 23.6792V23.9211C1.38162 23.9721 1.42906 24.0142 1.48382 24.0446C1.53858 24.075 1.59933 24.0929 1.66173 24.0971C1.69346 24.0946 1.72379 24.0829 1.74901 24.0634C1.77424 24.0438 1.79326 24.0173 1.80378 23.9871C1.81381 23.9187 1.80362 23.8489 1.77447 23.7863C1.74533 23.7237 1.69852 23.6712 1.63988 23.6352C1.55247 23.6352 1.49784 23.5802 1.49784 23.5362C1.49784 23.4922 1.49784 23.4262 1.66173 23.2942C1.9786 22.9423 1.98952 22.8763 1.96767 22.8323L1.83656 22.8873H1.72729C1.5634 22.8873 1.50877 22.8214 1.49784 22.5464C1.48691 22.2715 1.49784 22.1505 1.70544 22.0405C2.05508 21.8206 2.10971 21.7546 2.09879 21.6886C2.08786 21.6226 2.0223 21.6226 1.85841 21.6336H1.74915C1.74915 21.6336 1.74915 21.5676 1.74915 21.4906C1.78132 21.2058 1.91763 20.9431 2.13157 20.7538C2.1862 20.6768 2.24083 20.5998 2.21898 20.5338C2.19712 20.4679 2.10971 20.4789 2.04416 20.5338C1.96469 20.5338 1.8862 20.5515 1.81439 20.5857C1.74257 20.62 1.67923 20.6699 1.62896 20.7318C1.55076 20.8477 1.5195 20.9894 1.54155 21.1277L1.45413 21.7216C1.45413 21.8096 1.45413 21.9085 1.34487 21.9195C1.30552 21.9303 1.26403 21.9303 1.22468 21.9195C1.02801 21.7326 0.962451 21.7106 0.929672 21.7216L0.831336 21.6446ZM2.35009 25.7907H2.26268C2.17418 25.7416 2.0984 25.6722 2.04146 25.5881C1.98452 25.504 1.94801 25.4077 1.93489 25.3068C1.78192 24.526 1.6071 24.317 1.36672 24.2071C1.12635 24.0971 0.962451 23.8771 0.962451 23.7671C0.962451 23.4482 0.831336 23.3492 0.678367 23.3052C0.528375 23.2805 0.388338 23.2138 0.274316 23.1126C0.160294 23.0115 0.0769061 22.88 0.0337155 22.7334C-0.0112385 22.6015 -0.0112385 22.4583 0.0337155 22.3265C0.0455228 22.311 0.0603355 22.2982 0.0772451 22.2887C0.0941547 22.2793 0.112805 22.2734 0.132052 22.2715C0.263757 22.2885 0.390371 22.3335 0.503547 22.4034H0.590957C0.621913 22.3944 0.648885 22.375 0.667441 22.3485C0.68549 22.3068 0.694807 22.2619 0.694807 22.2165C0.694807 22.1711 0.68549 22.1261 0.667441 22.0845L0.416136 21.6336C0.355645 21.5303 0.330378 21.4099 0.344186 21.2907C0.357994 21.1716 0.410121 21.0603 0.49262 20.9737C0.634662 20.7978 0.722073 20.7538 0.765778 20.7428C0.777693 20.737 0.79077 20.7339 0.80402 20.7339C0.81727 20.7339 0.830347 20.737 0.842262 20.7428C1.02801 21.0397 1.10449 21.0617 1.15912 21.0617C1.21376 21.0617 1.27931 20.8638 1.27931 20.7978C1.27931 20.3359 1.41043 19.775 1.71637 19.753C1.76622 19.7377 1.81948 19.7377 1.86933 19.753C1.90481 19.7848 1.94636 19.8091 1.99145 19.8242C2.03653 19.8393 2.08421 19.845 2.13157 19.841C2.31156 19.8064 2.47173 19.7042 2.57954 19.5551H2.69973C2.69973 19.5551 2.81992 19.5551 2.86363 19.731C2.90496 19.9008 2.89931 20.0786 2.84731 20.2454C2.7953 20.4121 2.69892 20.5613 2.56862 20.6768C2.48121 20.8088 2.44843 20.8968 2.47028 20.9408C2.47028 20.9408 2.47028 20.9408 2.55769 20.9408C2.70066 20.9034 2.83703 20.8441 2.96196 20.7648C2.99696 20.7368 3.03823 20.718 3.08215 20.7098C3.08215 20.7098 3.18049 20.7648 3.19142 20.9078C3.25697 21.3037 2.96196 21.6336 2.26268 22.0075C2.22159 22.0238 2.18672 22.0528 2.16314 22.0904C2.13956 22.128 2.1285 22.1721 2.13157 22.2165C2.13281 22.2335 2.13761 22.25 2.14563 22.265C2.15366 22.28 2.16474 22.2931 2.17815 22.3034C2.19155 22.3138 2.20699 22.3212 2.22344 22.3252C2.23989 22.3292 2.25698 22.3296 2.27361 22.3265C2.31638 22.3393 2.36195 22.3393 2.40472 22.3265C2.51367 22.2335 2.64601 22.1726 2.78714 22.1505C2.83055 22.1413 2.87576 22.1472 2.91543 22.1672C2.9551 22.1872 2.9869 22.22 3.00567 22.2605C3.00567 22.3704 3.00567 22.5904 2.74344 22.8433C2.48121 23.0963 2.50306 23.1953 2.36102 23.2503C2.21898 23.3052 2.2299 23.3272 2.21898 23.3822C2.20805 23.4372 2.21898 23.4812 2.21898 23.5472C2.21898 23.6132 2.31731 23.7561 2.21898 23.9101C1.95674 24.1301 1.9786 24.647 2.28453 25.4608C2.32608 25.4988 2.35551 25.5483 2.36912 25.6031C2.38274 25.6579 2.37992 25.7155 2.36102 25.7687C2.35837 25.7872 2.34916 25.804 2.33509 25.8162C2.32103 25.8283 2.30306 25.8349 2.28453 25.8347"
        fill="#DAC6A1"
      />
      <path
        d="M3.44272 23.9871C3.35717 24.0128 3.26604 24.0128 3.18049 23.9871C3.14029 23.9605 3.10993 23.9213 3.09413 23.8756C3.07832 23.8298 3.07796 23.7801 3.09308 23.7342C3.08983 23.6647 3.11281 23.5967 3.15741 23.5436C3.20201 23.4906 3.26491 23.4565 3.33346 23.4482C3.53013 23.4482 3.65032 23.4482 3.6831 23.5692C3.70701 23.613 3.71955 23.6622 3.71955 23.7122C3.71955 23.7621 3.70701 23.8113 3.6831 23.8551C3.61598 23.9049 3.53665 23.9353 3.45365 23.9431"
        fill="#DAC6A1"
      />
      <path
        d="M0.328726 24.9219C0.264434 24.9402 0.196344 24.9402 0.132052 24.9219C0.0754504 24.88 0.0370564 24.8178 0.0248477 24.7482C0.012639 24.6785 0.0275541 24.6068 0.0664943 24.548C0.0750845 24.4908 0.0989365 24.4371 0.135501 24.3926C0.172066 24.348 0.21997 24.3143 0.274094 24.295H0.372431C0.406424 24.2874 0.441866 24.2895 0.47471 24.3012C0.507554 24.3129 0.536477 24.3336 0.558178 24.361C0.584535 24.4178 0.598194 24.4798 0.598194 24.5425C0.598194 24.6052 0.584535 24.6671 0.558178 24.7239C0.535062 24.7737 0.49997 24.8169 0.456085 24.8495C0.412201 24.8822 0.360913 24.9033 0.306873 24.9109"
        fill="#DAC6A1"
      />
      <path
        d="M1.70544 25.6477H1.61803C1.41043 25.4718 1.24653 25.3508 1.09357 25.3728C1.05979 25.3736 1.0266 25.3819 0.996384 25.3971C0.966163 25.4123 0.939652 25.4341 0.918746 25.4608H0.754851C0.708409 25.4696 0.660395 25.4638 0.617371 25.4441C0.574346 25.4244 0.538409 25.3918 0.514473 25.3508C0.495293 25.3174 0.485196 25.2794 0.485196 25.2408C0.485196 25.2022 0.495293 25.1643 0.514473 25.1309C0.636861 24.9443 0.746382 24.7496 0.842262 24.548C0.864257 24.5102 0.894274 24.4778 0.930164 24.4531C0.966053 24.4284 1.00693 24.412 1.04986 24.405C1.08431 24.4035 1.1187 24.4089 1.15108 24.4208C1.18345 24.4327 1.21318 24.451 1.23855 24.4745C1.26392 24.498 1.28444 24.5263 1.29894 24.5577C1.31343 24.5892 1.32161 24.6233 1.32302 24.658L1.3995 24.9109L1.72729 25.3398C1.74456 25.3739 1.75356 25.4116 1.75356 25.4498C1.75356 25.488 1.74456 25.5257 1.72729 25.5598L1.70544 25.6477Z"
        fill="#DAC6A1"
      />
      <path
        d="M2.75436 25.3728C2.75436 25.3728 2.75436 25.3728 2.6451 25.2408C2.61713 25.0992 2.61713 24.9535 2.6451 24.8119C2.70173 24.667 2.70173 24.5059 2.6451 24.361C2.62096 24.3213 2.60819 24.2756 2.60819 24.229C2.60819 24.1825 2.62096 24.1368 2.6451 24.0971C2.66073 24.064 2.68359 24.035 2.71198 24.0121C2.74037 23.9893 2.77354 23.9732 2.809 23.9651H2.87455C3.04963 24.0735 3.2322 24.169 3.42087 24.251C3.48072 24.2592 3.5353 24.2898 3.57377 24.3367C3.61224 24.3836 3.63177 24.4433 3.62847 24.504C3.61156 24.56 3.57661 24.6088 3.52914 24.6426C3.48167 24.6765 3.42436 24.6935 3.36624 24.6909C3.14771 24.6909 2.99474 24.8889 2.89641 25.2188C2.83085 25.3508 2.78714 25.3618 2.77622 25.3618"
        fill="#DAC6A1"
      />
      <path
        d="M28.8354 34.5118C28.7956 34.5176 28.7549 34.5136 28.7169 34.5002C28.6788 34.4868 28.6445 34.4644 28.6169 34.4348C28.5997 34.4027 28.5907 34.3668 28.5907 34.3304C28.5907 34.2939 28.5997 34.258 28.6169 34.2259C28.6169 34.0939 28.6169 33.9619 28.4421 33.841C28.3828 33.7797 28.3421 33.7026 28.3247 33.6189C28.3073 33.5352 28.3139 33.4482 28.3438 33.3681C28.3885 33.2896 28.4518 33.2234 28.5281 33.1755C28.6043 33.1275 28.6911 33.0992 28.7808 33.0931C28.854 33.0822 28.9288 33.0907 28.9978 33.1177C29.0667 33.1447 29.1275 33.1893 29.1742 33.2471C29.2164 33.3306 29.2384 33.4229 29.2384 33.5165C29.2384 33.6102 29.2164 33.7025 29.1742 33.786C29.1179 33.8278 29.0783 33.8883 29.0623 33.9568C29.0463 34.0253 29.055 34.0973 29.0868 34.1599C29.1029 34.1982 29.1095 34.24 29.1058 34.2815C29.1021 34.3229 29.0883 34.3629 29.0656 34.3977C29.0429 34.4325 29.012 34.4611 28.9757 34.481C28.9393 34.501 28.8987 34.5115 28.8573 34.5118"
        fill="#DAC6A1"
      />
      <path
        d="M33.7741 30.1018C33.7253 30.1052 33.677 30.0902 33.6387 30.0597C33.6003 30.0292 33.5746 29.9854 33.5665 29.9368C33.5665 29.7938 33.4463 29.7059 33.2278 29.6949C33.0093 29.6839 32.8891 29.4529 32.9219 29.266C32.9561 29.1465 33.0238 29.0394 33.1168 28.9575C33.2097 28.8756 33.3241 28.8224 33.4463 28.8041C33.6649 28.8041 33.8178 28.947 33.8615 29.277C33.8326 29.3404 33.8277 29.4124 33.8478 29.4793C33.8679 29.5461 33.9117 29.6033 33.9708 29.6399C34.0077 29.6691 34.0349 29.709 34.0486 29.7542C34.0622 29.7995 34.0618 29.8479 34.0473 29.8928C34.0254 29.9497 33.9883 29.9993 33.94 30.0361C33.8918 30.073 33.8344 30.0957 33.7741 30.1018Z"
        fill="#DAC6A1"
      />
      <path
        d="M36.4074 24.317C36.3648 24.3194 36.3225 24.3093 36.2856 24.2878C36.2487 24.2663 36.2189 24.2344 36.1998 24.1961C36.1779 24.1409 36.1375 24.0953 36.0855 24.0671C36.0336 24.039 35.9735 24.0301 35.9157 24.0421H35.8174C35.4786 23.9981 35.4786 23.7781 35.4786 23.6572C35.4901 23.5329 35.5408 23.4156 35.6235 23.3226C35.7061 23.2296 35.8162 23.1656 35.9375 23.1403C36.1124 23.1403 36.2544 23.2503 36.3527 23.4922V23.5472C36.3527 23.6572 36.3527 23.7671 36.5385 23.8001C36.5924 23.82 36.6375 23.8587 36.6655 23.9091C36.6936 23.9595 36.7028 24.0184 36.6915 24.0751C36.6776 24.1357 36.6464 24.1909 36.6017 24.2339C36.5571 24.2768 36.5009 24.3058 36.4402 24.317"
        fill="#DAC6A1"
      />
      <path
        d="M30.0155 36.4254C29.922 36.4233 29.8309 36.3956 29.752 36.3452C29.673 36.2948 29.6093 36.2237 29.5675 36.1395C29.5737 36.0711 29.5532 36.0031 29.5104 35.9497C29.4675 35.8963 29.4057 35.8618 29.3381 35.8535C29.284 35.8428 29.2359 35.812 29.2035 35.7671C29.1711 35.7222 29.1567 35.6667 29.1632 35.6116C29.1733 35.5441 29.204 35.4814 29.2509 35.4322C29.2979 35.3829 29.3589 35.3495 29.4255 35.3366C29.4615 35.3327 29.4979 35.3388 29.5307 35.3543C29.5634 35.3698 29.5913 35.3942 29.6112 35.4246C29.6358 35.4677 29.6735 35.5017 29.7188 35.5215C29.764 35.5413 29.8145 35.5459 29.8625 35.5346L30.0155 35.5456C30.2996 35.5456 30.4744 35.6556 30.4744 35.8755C30.4732 36.0131 30.4264 36.1464 30.3412 36.254C30.256 36.3616 30.1375 36.4375 30.0046 36.4694"
        fill="#DAC6A1"
      />
      <path
        d="M35.6207 31.1466C35.4983 31.1507 35.3771 31.1202 35.271 31.0586C35.2434 31.0147 35.2043 30.9792 35.1581 30.9559C35.1119 30.9327 35.0603 30.9225 35.0088 30.9266H34.8558C34.8237 30.9293 34.7913 30.9248 34.7611 30.9133C34.7308 30.9019 34.7035 30.8839 34.681 30.8606C34.6598 30.8435 34.6428 30.8217 34.6315 30.7969C34.6201 30.7721 34.6146 30.745 34.6155 30.7176C34.6109 30.6812 34.6139 30.6442 34.6243 30.6091C34.6347 30.5739 34.6523 30.5413 34.676 30.5133C34.6996 30.4854 34.7288 30.4627 34.7617 30.4468C34.7945 30.4308 34.8303 30.4219 34.8668 30.4207H34.9542C34.9935 30.432 35.0351 30.432 35.0744 30.4207C35.1811 30.3978 35.2772 30.3397 35.3475 30.2557C35.4248 30.2102 35.5102 30.1804 35.5988 30.1678C35.6575 30.1621 35.7166 30.1736 35.7689 30.2009C35.8213 30.2282 35.8646 30.2702 35.8938 30.3217C35.9397 30.408 35.9638 30.5043 35.9638 30.6022C35.9638 30.7 35.9397 30.7964 35.8938 30.8826C35.8676 30.9398 35.8262 30.9886 35.7741 31.0235C35.722 31.0585 35.6614 31.0782 35.5988 31.0806"
        fill="#DAC6A1"
      />
      <path
        d="M38.4397 24.7459C38.3608 24.766 38.2782 24.766 38.1993 24.7459C38.1385 24.7029 38.066 24.6797 37.9917 24.6797C37.9174 24.6797 37.8449 24.7029 37.7841 24.7459H37.6858C37.6525 24.7506 37.6186 24.7481 37.5862 24.7388C37.5539 24.7294 37.5239 24.7133 37.4982 24.6915C37.4725 24.6698 37.4515 24.6428 37.4368 24.6124C37.4221 24.582 37.4138 24.5488 37.4126 24.515C37.3969 24.4537 37.3969 24.3893 37.4126 24.328C37.4344 24.3024 37.4611 24.2813 37.4912 24.2662C37.5212 24.2511 37.5539 24.2422 37.5874 24.24H37.7404C37.8004 24.2288 37.8567 24.2028 37.9043 24.1645C37.9519 24.1261 37.9895 24.0765 38.0135 24.0201C38.0962 23.9269 38.208 23.8648 38.3304 23.8441C38.3902 23.8395 38.4501 23.8526 38.5026 23.882C38.555 23.9113 38.5977 23.9555 38.6254 24.0091C38.6892 24.0814 38.7345 24.1683 38.7573 24.2622C38.7802 24.3561 38.7799 24.4542 38.7565 24.548C38.7306 24.6023 38.6905 24.6484 38.6404 24.6814C38.5903 24.7143 38.5322 24.7328 38.4724 24.7349"
        fill="#DAC6A1"
      />
      <path
        d="M24.3229 37.9101C24.1822 37.9382 24.0374 37.9382 23.8968 37.9101C23.4434 37.758 23.0132 37.5433 22.6184 37.2722C22.082 36.969 21.4843 36.7923 20.8702 36.7553C20.8431 36.7515 20.817 36.742 20.7938 36.7274C20.7705 36.7129 20.7505 36.6936 20.7351 36.6708C20.7197 36.6481 20.7091 36.6223 20.7042 36.5952C20.6992 36.5681 20.6999 36.5402 20.7063 36.5134C20.7053 36.4591 20.7234 36.4061 20.7574 36.3639C20.7913 36.3216 20.839 36.2928 20.892 36.2824C21.5903 36.4048 22.2722 36.6078 22.9243 36.8873C23.044 36.942 23.1758 36.9648 23.3067 36.9533C23.4734 36.9332 23.6337 36.8769 23.7766 36.7883L24.0388 36.6784C25.1764 36.0787 26.4066 35.6772 27.6773 35.4906H28.0925C28.2126 35.4906 28.2673 35.4906 28.2673 35.4906C28.2673 35.4906 28.2673 35.5786 27.9395 35.6116H27.8302C27.5786 35.6405 27.3343 35.715 27.1091 35.8315L26.1585 36.3154C25.706 36.5927 25.2114 36.7933 24.6944 36.9093C24.6545 36.9149 24.6141 36.9149 24.5742 36.9093C24.1481 36.9753 23.9077 37.0853 23.8968 37.2172C23.8858 37.3492 23.9951 37.3602 24.1481 37.3602H24.4868C24.9927 37.2948 25.4819 37.1344 25.9291 36.8873C26.6544 36.3577 27.48 35.9834 28.3547 35.7876H28.453C28.453 35.7876 28.5404 35.7876 28.5514 35.7876C28.529 35.8549 28.4957 35.918 28.453 35.9745C27.7176 36.6171 26.8584 37.1001 25.9291 37.3932C25.6887 37.4702 25.4701 37.5692 25.2625 37.6462C24.9731 37.7885 24.6635 37.885 24.3447 37.9321"
        fill="#DAC6A1"
      />
      <path
        d="M25.4483 38.6579C24.607 38.7349 24.0934 38.559 23.8421 38.1081C24.0479 38.1476 24.2592 38.1476 24.4649 38.1081C25.23 37.9907 25.9693 37.7415 26.6502 37.3712C27.0636 37.1402 27.5093 36.9734 27.9723 36.8763C28.1689 36.8763 28.2564 36.8763 28.2564 36.9423C28.2564 37.0083 28.2564 37.0193 28.1799 37.0523L25.8853 37.9981C25.7542 37.9981 25.6777 38.1191 25.6887 38.185C25.6996 38.251 25.7542 38.273 25.8526 38.262C26.3908 38.1108 26.9083 37.8929 27.3932 37.6132C27.7443 37.3842 28.1386 37.2307 28.5514 37.1623H28.7043C28.7917 37.1623 28.8245 37.1623 28.8245 37.1623C28.8245 37.1623 28.8245 37.2282 28.6934 37.2832C27.7267 37.8396 26.7051 38.2929 25.645 38.6359H25.4374"
        fill="#DAC6A1"
      />
      <path
        d="M23.4597 36.7004C23.2193 36.7004 22.9134 36.6344 22.8478 36.4584C23.3294 36.3632 23.7668 36.1121 24.0934 35.7436C24.3298 35.5317 24.5778 35.3334 24.8364 35.1497C24.9426 35.0737 25.0672 35.0281 25.197 35.0177C25.3761 34.9918 25.5496 34.9361 25.7105 34.8528C25.9749 34.6807 26.2731 34.5681 26.5846 34.5228C26.7582 34.5046 26.9333 34.539 27.0872 34.6218C27.2074 34.7098 27.2184 34.7428 27.2184 34.7538H26.9015C26.5408 34.7881 26.1985 34.9298 25.9181 35.1607L25.0549 35.4136C24.8255 35.4906 24.5851 35.6226 24.596 35.7326C24.607 35.8425 24.596 35.7985 24.7272 35.7326H24.8146L25.2407 35.6226C25.3909 35.5811 25.5344 35.5181 25.6668 35.4356C25.8442 35.3159 26.0457 35.2371 26.2568 35.2047C26.465 35.1621 26.6696 35.1033 26.8687 35.0287L27.2074 34.9077C27.2255 34.9046 27.244 34.9054 27.2618 34.9099C27.2796 34.9144 27.2962 34.9226 27.3106 34.934C27.325 34.9454 27.3369 34.9598 27.3455 34.9761C27.354 34.9924 27.3591 35.0103 27.3604 35.0287C27.3651 35.0498 27.3654 35.0716 27.3613 35.0927C27.3571 35.1139 27.3486 35.1339 27.3362 35.1516C27.3238 35.1692 27.3079 35.184 27.2895 35.1951C27.2711 35.2061 27.2506 35.2131 27.2293 35.2157C27.0647 35.2676 26.8968 35.308 26.7267 35.3367C26.4457 35.3974 26.1684 35.4745 25.8963 35.5676C25.1472 35.8534 24.4172 36.1877 23.711 36.5684C23.6328 36.6286 23.5363 36.6597 23.4379 36.6564"
        fill="#DAC6A1"
      />
      <path
        d="M28.9229 35.2597C28.8755 35.2645 28.8278 35.2557 28.7852 35.2342C28.7427 35.2128 28.7071 35.1797 28.6825 35.1387C28.6729 35.1002 28.6751 35.0596 28.6888 35.0224C28.7024 34.9851 28.7269 34.9528 28.759 34.9297C28.759 34.7758 28.9993 34.6438 29.2725 34.4458C29.8632 34.0742 30.3816 33.5971 30.8022 33.0381C31.2889 32.4223 31.859 31.8781 32.4958 31.4215C32.7908 31.1795 33.1186 30.9156 33.4463 30.6297C33.5665 30.5087 33.5993 30.4977 33.6102 30.4977C33.6212 30.4977 33.6102 30.4977 33.6102 30.6297C33.3895 31.2036 32.981 31.6846 32.4521 31.9934C31.7419 32.4574 31.1202 33.046 30.6164 33.731C30.5509 33.841 30.529 33.907 30.6164 33.9509C30.6164 33.9509 30.7366 33.9509 30.977 33.742C31.3948 33.1814 31.9092 32.7008 32.4958 32.3233C33.0231 31.9762 33.4493 31.4942 33.7304 30.9266C33.7851 30.8276 33.8069 30.8166 33.8069 30.8166C33.8225 30.9187 33.8225 31.0225 33.8069 31.1246C33.7739 31.427 33.6756 31.7185 33.5189 31.9788C33.3623 32.239 33.1511 32.4617 32.9 32.6312C32.2693 33.3012 31.5304 33.859 30.7148 34.2809C30.1085 34.3432 29.551 34.6435 29.1632 35.1167C29.1373 35.158 29.102 35.1925 29.0602 35.2174C29.0184 35.2423 28.9713 35.2567 28.9229 35.2597Z"
        fill="#DAC6A1"
      />
      <path
        d="M31.6435 34.7098H30.5618C30.4416 34.7098 30.4088 34.7098 30.3979 34.7098C30.387 34.7098 30.3979 34.6218 30.529 34.5778C31.872 34.1334 33.0269 33.2461 33.8069 32.0594C33.8645 32.0039 33.9365 31.9658 34.0145 31.9494H34.091C34.0996 31.9664 34.1041 31.9853 34.1041 32.0044C34.1041 32.0235 34.0996 32.0423 34.091 32.0594C33.6749 32.7902 33.0856 33.4061 32.3756 33.852L32.1898 33.9949C32.0696 34.0829 32.0041 34.1819 32.0259 34.2589C32.0397 34.2705 32.0571 34.2769 32.0751 34.2769C32.0931 34.2769 32.1105 34.2705 32.1243 34.2589H32.2335C33.1006 33.6799 33.8436 32.9321 34.4188 32.0594C34.4188 31.9824 34.4843 31.9824 34.4953 31.9824C34.5062 31.9824 34.4953 31.9824 34.4953 32.0923C34.5608 32.3453 34.3642 32.6862 33.938 33.1041C33.5092 33.628 33.0046 34.084 32.4411 34.4568C32.1655 34.5319 31.8841 34.5834 31.5998 34.6108"
        fill="#DAC6A1"
      />
      <path
        d="M29.786 33.819H29.7096C29.6962 33.7936 29.6892 33.7653 29.6892 33.7365C29.6892 33.7077 29.6962 33.6794 29.7096 33.654C29.8 33.3456 29.8586 33.0287 29.8844 32.7082C29.9697 32.3062 30.1992 31.9499 30.529 31.7074C31.0785 31.2439 31.5934 30.7403 32.0696 30.2008H32.1243C32.1243 30.2008 32.1243 30.2008 32.1243 30.3437C32.1243 30.4867 31.9167 30.7946 31.5779 31.1136C31.2392 31.4325 31.1518 31.5095 30.9114 31.7844L30.3433 32.4443C30.2886 32.5543 30.2668 32.6312 30.3433 32.6642H30.4088C30.5202 32.6392 30.6179 32.5723 30.682 32.4773C31.0134 31.985 31.4063 31.5378 31.8511 31.1466C31.9494 31.0586 31.9931 31.0366 32.0041 31.0366C32.015 31.0366 32.0041 31.0916 32.0041 31.2455C31.9012 31.5628 31.6928 31.8346 31.4141 32.0154C31.0068 32.3475 30.6657 32.7542 30.4088 33.2141C30.262 33.4829 30.0422 33.7042 29.7751 33.852"
        fill="#DAC6A1"
      />
      <path
        d="M34.2003 30.6627C34.1758 30.6671 34.1505 30.663 34.1286 30.651C34.1068 30.639 34.0896 30.6198 34.0801 30.5967C34.0588 30.562 34.0475 30.522 34.0475 30.4812C34.0475 30.4404 34.0588 30.4004 34.0801 30.3657C34.5298 29.8138 34.8073 29.1404 34.8777 28.4301L35.0307 28.0342C35.3488 27.0639 35.8052 26.1452 36.3855 25.3068C36.4948 25.1968 36.5385 25.1858 36.5494 25.1858C36.5603 25.1858 36.5494 25.1858 36.5494 25.3728C36.338 26.0008 36.0861 26.6143 35.7955 27.2094C35.5799 27.6412 35.3901 28.0855 35.2273 28.5401C35.2273 28.6611 35.2273 28.7271 35.2273 28.7601H35.282C35.3415 28.7428 35.3946 28.7084 35.4349 28.6611C35.8499 28.0091 36.1631 27.297 36.3637 26.5495C36.5185 26.0124 36.7196 25.4899 36.9646 24.9879C37.063 24.8119 37.1067 24.8009 37.1176 24.8009C37.1285 24.8009 37.1176 24.8009 37.1176 25.0539C37.0183 26.2562 36.6444 27.4192 36.025 28.4521C35.8888 28.6222 35.735 28.777 35.566 28.914C35.377 29.0501 35.2203 29.2266 35.1071 29.4309C34.9169 29.8363 34.6623 30.2078 34.3532 30.5307C34.3031 30.5845 34.2386 30.6227 34.1675 30.6407"
        fill="#DAC6A1"
      />
      <path
        d="M34.4625 29.068C34.4625 29.068 34.3969 29.068 34.3423 29.002C33.5338 27.7593 34.3423 26.2966 35.1727 25.3068C35.271 25.2188 35.3257 25.1968 35.3475 25.1968C35.3568 25.2051 35.3643 25.2152 35.3694 25.2266C35.3745 25.238 35.3771 25.2503 35.3771 25.2628C35.3771 25.2753 35.3745 25.2876 35.3694 25.299C35.3643 25.3104 35.3568 25.3206 35.3475 25.3288C35.1362 25.5774 35.0031 25.8837 34.9651 26.2086C34.9114 26.5051 34.7878 26.7842 34.6045 27.0224C34.5336 27.1173 34.4749 27.2207 34.4297 27.3304C34.3205 27.5723 34.2877 27.7483 34.3314 27.8253H34.386C34.4406 27.8253 34.4953 27.7593 34.5281 27.7153C34.764 27.2881 34.9579 26.8387 35.1071 26.3736C35.2102 25.9843 35.3724 25.6133 35.5879 25.2738C35.6214 25.2243 35.672 25.189 35.7299 25.1748H35.7955C35.8099 25.2039 35.8174 25.2359 35.8174 25.2683C35.8174 25.3008 35.8099 25.3328 35.7955 25.3618C35.5772 26.0626 35.2765 26.7345 34.8995 27.3634C34.7055 27.6682 34.5857 28.0149 34.5499 28.3752C34.5499 28.7051 34.4516 28.991 34.3751 28.991"
        fill="#DAC6A1"
      />
      <path
        d="M35.5551 29.5739H35.4786C35.4786 29.5739 35.4786 29.5189 35.5442 29.3869C36.0856 28.9066 36.5116 28.3086 36.7898 27.6383C36.8074 27.3296 36.8954 27.0292 37.0469 26.7602C37.1985 26.4913 37.4096 26.2612 37.6639 26.0876L37.8934 25.9887C37.8934 25.9887 37.8934 26.0547 37.7513 26.2306C37.4907 26.5829 37.2912 26.9771 37.1613 27.3964C37.0322 27.7914 36.8403 28.1628 36.5931 28.4961C36.5057 28.6171 36.4839 28.6941 36.5057 28.7381H36.5713C36.6182 28.7468 36.6664 28.7468 36.7133 28.7381C36.9832 28.4212 37.1742 28.0442 37.2706 27.6383C37.436 27.0848 37.6947 26.564 38.0354 26.0986C38.1337 26.0217 38.1774 26.0107 38.1993 26.0107C38.2211 26.0107 38.1993 26.0107 38.1447 26.2416C38.0156 26.5433 37.9026 26.8517 37.8059 27.1654C37.6487 27.7953 37.3943 28.3965 37.052 28.947C36.9018 29.087 36.7279 29.1987 36.5385 29.277L36.2107 29.3869L35.8501 29.5189C35.7597 29.5722 35.6592 29.6059 35.5551 29.6179"
        fill="#DAC6A1"
      />
      <path
        d="M36.7461 23.0853C36.713 23.0875 36.6798 23.0816 36.6494 23.0682C36.619 23.0548 36.5922 23.0343 36.5713 23.0083C35.8283 22.4254 35.6425 21.4576 35.9922 19.951C35.9922 19.885 35.9922 19.841 35.9922 19.797H36.0468C36.1393 19.8903 36.2014 20.0097 36.2248 20.1393C36.2482 20.269 36.2319 20.4028 36.1779 20.5228C36.0417 21.058 36.0722 21.6224 36.2653 22.1395C36.2653 22.2385 36.3746 22.2715 36.4183 22.2605C36.431 22.2408 36.4378 22.2179 36.4378 22.1945C36.4378 22.1711 36.431 22.1481 36.4183 22.1285C36.2645 21.7366 36.234 21.3067 36.3309 20.8968C36.3496 20.7728 36.3496 20.6468 36.3309 20.5228C36.319 20.4834 36.319 20.4413 36.3309 20.4019H36.4511C36.5494 20.5119 36.6587 20.7208 36.5713 21.3477C36.4962 21.6584 36.4962 21.9827 36.5713 22.2935C36.6681 22.4956 36.6876 22.7266 36.6259 22.9423C36.6259 23.0083 36.5713 23.0413 36.5385 23.0413"
        fill="#DAC6A1"
      />
      <path
        d="M36.9209 24.669C36.8962 24.6722 36.871 24.6688 36.848 24.6591C36.825 24.6495 36.8049 24.6339 36.7898 24.614C36.7754 24.5869 36.7679 24.5567 36.7679 24.526C36.7679 24.4953 36.7754 24.4651 36.7898 24.438C36.8087 24.1082 36.8563 23.7807 36.9318 23.4592C37.0196 23.096 37.0527 22.7216 37.0302 22.3485C36.8778 21.4275 37.0395 20.4817 37.4891 19.665C37.5256 19.6209 37.5755 19.59 37.6311 19.5771C37.6311 19.5771 37.7076 19.5771 37.7185 19.731C37.7835 20.1122 37.7056 20.5041 37.5 20.8308C37.3426 21.32 37.2868 21.8366 37.3361 22.3485C37.3166 22.3979 37.3166 22.453 37.3361 22.5024C37.3713 22.516 37.4102 22.516 37.4454 22.5024C37.5219 22.5024 37.5983 22.4254 37.6093 22.2495C37.5321 21.7378 37.5885 21.2148 37.7732 20.7318C37.932 20.4077 37.9707 20.0373 37.8824 19.687C37.8824 19.588 37.8824 19.5661 37.8824 19.5661C37.8824 19.5661 37.8824 19.5661 37.9808 19.632C38.0791 19.698 38.1993 19.863 38.2211 20.4019C38.2363 21.0093 38.1514 21.615 37.9698 22.1945C37.8422 22.4483 37.6999 22.6943 37.5437 22.9313C37.3637 23.1727 37.2202 23.4396 37.1176 23.7232C37.012 23.9416 36.9813 24.1891 37.0302 24.427C37.0332 24.453 37.0311 24.4794 37.0239 24.5046C37.0167 24.5298 37.0047 24.5533 36.9884 24.5737C36.9722 24.5942 36.952 24.6112 36.9292 24.6238C36.9063 24.6363 36.8812 24.6442 36.8553 24.647"
        fill="#DAC6A1"
      />
      <path
        d="M37.5437 23.7891C37.5437 23.7891 37.5437 23.7232 37.5437 23.5692L38.2867 22.3485C38.5187 21.7049 38.6045 21.0172 38.538 20.3359C38.5245 20.278 38.5245 20.2178 38.538 20.1599H38.6036C38.7238 20.2259 38.8439 20.3469 38.7675 20.6438L38.5926 21.6446L38.4724 22.3155C38.4599 22.3411 38.4534 22.3693 38.4534 22.3979C38.4534 22.4265 38.4599 22.4548 38.4724 22.4804H38.538C38.5926 22.4804 38.6473 22.4144 38.6473 22.2935C38.6392 21.9883 38.7068 21.6859 38.8439 21.4137C38.9711 20.9793 38.9711 20.5173 38.8439 20.0829C38.836 20.0542 38.836 20.0237 38.8439 19.995C38.8439 19.995 38.8439 19.995 38.9641 20.1049C39.0792 20.223 39.1611 20.3698 39.2014 20.5301C39.2417 20.6905 39.239 20.8588 39.1936 21.0177C39.1188 21.2214 39.0926 21.4399 39.1171 21.6556C39.1505 21.9672 39.0602 22.2795 38.8658 22.5244L37.7732 23.5472C37.674 23.6319 37.5588 23.6955 37.4344 23.7342"
        fill="#DAC6A1"
      />
      <path
        d="M52.4035 7.95256C52.0138 7.70941 51.5677 7.57333 51.1094 7.5579C50.6512 7.54246 50.197 7.6482 49.7921 7.86458C49.2026 8.63117 48.8939 9.57894 48.918 10.548C48.918 12.3956 49.8576 13.5064 51.3546 13.5064C51.7076 13.5141 52.0591 13.4582 52.3926 13.3414C52.4098 12.8151 52.3509 12.289 52.2177 11.7797C51.9366 11.5736 51.6225 11.4173 51.289 11.3178L51.431 10.647H55.146L55.288 11.3178L54.4248 11.6588C54.3342 12.2852 54.2867 12.9173 54.2828 13.5504V13.7483C53.3249 14.357 52.2142 14.6775 51.0814 14.6721C48.4372 14.6721 46.7983 13.1544 46.7983 10.702C46.8235 10.1221 46.9624 9.55307 47.2071 9.02753C47.4518 8.502 47.7974 8.03039 48.2239 7.63988C48.6505 7.24937 49.1496 6.94769 49.6926 6.7522C50.2355 6.55672 50.8115 6.4713 51.3873 6.50088C52.3929 6.49081 53.3861 6.72469 54.2828 7.18273L54.4795 7.52366C54.3702 8.10653 54.1298 9.1623 54.0424 9.53622C53.6372 9.53706 53.2323 9.51503 52.8296 9.47024C52.7569 8.94716 52.6136 8.43655 52.4035 7.95256Z"
        fill="white"
      />
      <path
        d="M56.3151 10.8229C56.3062 10.2534 56.4113 9.68789 56.6241 9.16008C56.8369 8.63227 57.153 8.15296 57.5537 7.7507C57.9543 7.34844 58.4313 7.03146 58.9563 6.81863C59.4812 6.6058 60.0433 6.50148 60.6091 6.51188C61.1259 6.47015 61.6455 6.54038 62.1329 6.71784C62.6204 6.89529 63.0644 7.17584 63.4351 7.54059C63.8058 7.90534 64.0945 8.34582 64.2817 8.83234C64.469 9.31887 64.5505 9.84014 64.5208 10.361C64.5355 10.9237 64.4372 11.4835 64.2317 12.007C64.0263 12.5305 63.7178 13.0068 63.325 13.4073C62.9321 13.8079 62.4629 14.1244 61.9456 14.338C61.4282 14.5516 60.8733 14.6577 60.3141 14.6501C59.7939 14.6975 59.2697 14.6326 58.7765 14.4597C58.2832 14.2869 57.8322 14.0101 57.4537 13.6479C57.0752 13.2856 56.7778 12.8462 56.5815 12.3591C56.3851 11.8719 56.2943 11.3482 56.3151 10.8229ZM61.9203 13.0775C62.2514 12.3699 62.4124 11.5938 62.3901 10.8119C62.3901 8.87636 61.811 7.69962 60.3469 7.69962C59.9096 7.68992 59.4795 7.81251 59.1122 8.05154C58.638 8.8111 58.3984 9.69526 58.4239 10.592C58.4239 12.4506 59.2324 13.5504 60.6091 13.5504C61.0877 13.5521 61.5518 13.3848 61.9203 13.0775Z"
        fill="white"
      />
      <path
        d="M66.2143 13.4624C66.2845 12.8344 66.3174 12.2027 66.3127 11.5708V9.6242C66.3459 9.03271 66.2906 8.43956 66.1488 7.86458C65.8875 7.63513 65.5772 7.46953 65.2419 7.38069L65.3949 6.69883H67.1649C67.5692 6.69883 68.782 6.63285 69.3502 6.63285C71.2732 6.63285 72.4423 7.3037 72.4423 8.62342C72.4186 9.0161 72.2836 9.3937 72.0531 9.71143C71.8226 10.0292 71.5065 10.2737 71.1421 10.416C71.5981 10.4764 72.0176 10.6994 72.3243 11.0444C72.631 11.3895 72.8047 11.8337 72.8138 12.2966C72.8138 13.8253 71.3606 14.5841 69.7435 14.5841C69.0333 14.5841 67.9844 14.4852 67.2632 14.4852H65.3949L65.2419 13.8033L66.2143 13.4624ZM68.2575 10.0641L69.7872 10.1411C70.1094 9.8688 70.3232 9.4887 70.3895 9.07054C70.4557 8.65238 70.3699 8.22421 70.1478 7.86458C69.8607 7.6828 69.525 7.59448 69.1863 7.61164C68.9359 7.60825 68.6861 7.63783 68.4433 7.69962H68.3559C68.2845 8.33856 68.2517 8.98127 68.2575 9.6242V10.0641ZM68.4651 13.3634C68.7987 13.5474 69.1789 13.6278 69.5578 13.5943C69.8258 13.5993 70.0925 13.5546 70.3445 13.4624C70.5002 13.3102 70.6225 13.1269 70.7034 12.9242C70.7843 12.7215 70.8221 12.5039 70.8143 12.2856C70.8143 11.6038 70.3991 11.1859 69.5687 11.1859H68.2575V11.5818C68.2257 12.1732 68.2809 12.7662 68.4214 13.3414L68.4651 13.3634Z"
        fill="white"
      />
      <path
        d="M74.8133 13.4624C74.8783 12.834 74.9075 12.2025 74.9007 11.5708V9.6242C74.9396 9.03262 74.8843 8.43859 74.7368 7.86458C74.4816 7.63251 74.1741 7.46643 73.8409 7.38069L73.9829 6.69883H77.7525L77.9055 7.38069L76.933 7.72161C76.8626 8.35327 76.8297 8.9886 76.8347 9.6242V11.5708C76.8028 12.1622 76.858 12.7552 76.9986 13.3304C77.2609 13.5559 77.5712 13.7177 77.9055 13.8033L77.7525 14.4852H73.9502L73.8081 13.8033L74.8133 13.4624Z"
        fill="white"
      />
      <path
        d="M80.2765 13.4624C80.3467 12.8344 80.3795 12.2027 80.3748 11.5708V9.6242C80.408 9.03271 80.3528 8.43956 80.2109 7.86458C79.949 7.63611 79.6389 7.47063 79.304 7.38069L79.457 6.69883H82.5492C83.9477 6.69883 85.0622 6.69883 85.98 6.61085C86.109 6.77812 86.2259 6.95454 86.3296 7.13874C86.2422 7.68862 86.0346 8.66741 85.9472 9.05233C85.5603 9.06645 85.1729 9.04806 84.789 8.99734L84.494 7.69962C84.1072 7.63966 83.7163 7.61024 83.3249 7.61164H82.3853C82.3853 7.96356 82.2978 8.7114 82.2978 9.61321V10.2511L84.647 10.0531L84.8655 10.35C84.8655 10.647 84.7563 10.9769 84.7016 11.2738L82.2978 11.1859V11.5708C82.2594 12.1624 82.3147 12.7563 82.4617 13.3304L82.5382 13.4074C82.8609 13.5355 83.2092 13.5845 83.5544 13.5504C83.9208 13.5499 84.2864 13.5168 84.647 13.4514L85.0294 12.0987C85.4491 12.0833 85.8692 12.1017 86.2859 12.1537C86.2859 12.8905 86.2859 13.6713 86.2859 14.4522H79.4679L79.315 13.7703L80.2765 13.4624Z"
        fill="white"
      />
      <path
        d="M88.7116 13.4624C88.7818 12.8344 88.8146 12.2027 88.8099 11.5708V9.6242C88.8431 9.03271 88.7879 8.43956 88.646 7.86458C88.3893 7.63462 88.0824 7.46884 87.7501 7.38069L87.8921 6.69883H89.7605C90.1648 6.69883 91.3885 6.63285 91.9458 6.63285C93.8142 6.63285 94.9505 7.29271 94.9505 8.67841C94.9195 9.13138 94.7613 9.56617 94.4944 9.93219C94.2274 10.2982 93.8627 10.5804 93.4427 10.746C93.9078 11.6664 94.4259 12.5587 94.9942 13.4184L95.7263 13.8033L95.5842 14.4852C94.8412 14.4852 94.1747 14.4852 93.3006 14.4852C92.9291 13.6053 92.4265 12.5276 91.8147 11.3288H90.722V11.5268C90.6847 12.1184 90.74 12.7121 90.8859 13.2864C91.1423 13.5145 91.4497 13.6768 91.7819 13.7593L91.6398 14.4412H87.9249L87.7828 13.7593L88.7116 13.4624ZM90.7439 10.2511L92.3063 10.3171C92.5104 10.1365 92.6721 9.9127 92.7798 9.66166C92.8875 9.41062 92.9385 9.13865 92.9291 8.86537C92.9547 8.50976 92.8667 8.15524 92.6778 7.85358C92.3936 7.67463 92.0622 7.58645 91.7272 7.60064C91.4286 7.59655 91.1309 7.63355 90.8422 7.71062C90.7664 8.34182 90.7336 8.97749 90.7439 9.6132V10.2511Z"
        fill="white"
      />
      <path
        d="M97.5073 7.86458C97.233 7.66124 96.9313 7.49831 96.6113 7.38069L96.7533 6.69883C97.551 6.69883 98.5343 6.69883 99.2664 6.69883C100.345 8.42561 101.55 10.0688 102.872 11.6148C102.913 10.3744 102.833 9.13303 102.632 7.90857C102.297 7.68619 101.928 7.52256 101.539 7.42468L101.681 6.74283H105.101L105.243 7.42468L104.282 7.7766C104.096 9.98921 104.03 12.2104 104.085 14.4302L102.588 14.5731L101.594 13.1214C100.818 12.0217 99.8236 10.768 98.9823 9.71218C98.9542 10.9365 99.0236 12.1612 99.1899 13.3744C99.5882 13.6081 100.025 13.7683 100.479 13.8473L100.337 14.5291H96.7533L96.6659 13.8033L97.6275 13.4624C97.7105 12.4896 97.7433 11.5132 97.7258 10.537C97.7769 9.6403 97.7034 8.7408 97.5073 7.86458Z"
        fill="white"
      />
      <path
        d="M105.91 10.8229C105.902 10.2529 106.009 9.68713 106.223 9.15927C106.437 8.63141 106.754 8.1522 107.155 7.7501C107.557 7.348 108.035 7.03119 108.56 6.81848C109.086 6.60578 109.648 6.50151 110.215 6.51187C110.733 6.46682 111.255 6.53457 111.745 6.71053C112.235 6.88649 112.682 7.16653 113.055 7.53165C113.428 7.89677 113.719 8.33842 113.908 8.82662C114.096 9.31482 114.178 9.83814 114.148 10.361C114.163 10.9265 114.064 11.4892 113.856 12.0149C113.649 12.5406 113.337 13.0184 112.941 13.4194C112.545 13.8205 112.071 14.1363 111.55 14.3479C111.029 14.5594 110.47 14.6622 109.909 14.6501C109.389 14.6957 108.865 14.6295 108.373 14.456C107.88 14.2825 107.43 14.0056 107.052 13.6438C106.674 13.2819 106.377 12.8433 106.18 12.357C105.983 11.8707 105.891 11.3478 105.91 10.8229ZM111.515 13.0775C111.85 12.3711 112.015 11.5947 111.996 10.8119C111.996 8.87636 111.416 7.69962 109.952 7.69962C109.504 7.68319 109.061 7.80606 108.685 8.05154C108.214 8.81231 107.979 9.69638 108.007 10.592C108.007 12.3956 108.794 13.5064 110.127 13.5064C110.627 13.5423 111.121 13.3894 111.515 13.0775Z"
        fill="white"
      />
      <path
        d="M119.283 13.4624C119.348 12.834 119.378 12.2025 119.371 11.5708V9.6242C119.41 9.03262 119.354 8.43859 119.207 7.86458C118.952 7.63251 118.644 7.46643 118.311 7.38069L118.453 6.69883H120.19C120.595 6.69883 121.829 6.63285 122.376 6.63285C125.577 6.63285 126.659 8.42546 126.659 10.526C126.698 11.0616 126.624 11.5995 126.441 12.1039C126.258 12.6084 125.97 13.0678 125.597 13.4517C125.224 13.8356 124.774 14.1352 124.277 14.3304C123.78 14.5257 123.247 14.6121 122.714 14.5841C122.015 14.5841 120.955 14.4852 120.245 14.4852H118.431L118.289 13.8033L119.283 13.4624ZM121.545 13.4074C122.114 13.6554 122.755 13.675 123.337 13.4624C123.799 13.1384 124.164 12.6937 124.393 12.1762C124.622 11.6588 124.707 11.0882 124.637 10.526C124.672 10.0699 124.613 9.61145 124.462 9.17979C124.312 8.74812 124.074 8.35267 123.763 8.01855C123.314 7.7762 122.808 7.65853 122.299 7.67762C122 7.67674 121.7 7.69511 121.403 7.73261C121.333 8.36061 121.3 8.99226 121.305 9.6242V11.5708C121.273 12.1622 121.328 12.7552 121.469 13.3304C121.497 13.3532 121.523 13.379 121.545 13.4074Z"
        fill="white"
      />
      <path
        d="M128.461 13.4624C128.532 12.8344 128.565 12.2027 128.56 11.5708V9.6242C128.593 9.03271 128.538 8.43956 128.396 7.86458C128.134 7.63611 127.824 7.47063 127.489 7.38069L127.642 6.69883H130.734C132.133 6.69883 133.247 6.69883 134.165 6.61085C134.294 6.77812 134.411 6.95454 134.515 7.13874C134.427 7.68862 134.22 8.66741 134.132 9.05233C133.745 9.06645 133.358 9.04806 132.974 8.99734L132.723 7.69962C132.336 7.63966 131.945 7.61024 131.554 7.61164H130.537C130.537 7.96356 130.45 8.7114 130.45 9.6132V10.2511L132.799 10.1081L133.018 10.405C133.018 10.702 132.908 11.0319 132.854 11.3288L130.45 11.2409V11.6258C130.415 12.2179 130.474 12.8119 130.625 13.3854L130.701 13.4624C131.021 13.6018 131.37 13.6621 131.718 13.6383C132.084 13.6379 132.45 13.6048 132.81 13.5394L133.193 12.1866C133.612 12.1713 134.032 12.1897 134.449 12.2416C134.449 12.9785 134.449 13.7593 134.449 14.5401H127.62L127.467 13.8583L128.461 13.4624Z"
        fill="white"
      />
      <path
        d="M52.5018 33.3461H47.0387L46.8092 32.2463L48.4591 31.7074C48.5902 30.6956 48.7541 28.4631 48.8524 26.5056C49.0172 25.2021 49.0172 23.8829 48.8524 22.5794C48.4252 22.2181 47.9314 21.9453 47.3992 21.7766L47.6396 20.6768H53.66C54.1735 22.4584 55.441 26.0107 56.4025 28.2982C57.3422 25.7247 58.697 22.3595 59.145 20.6768H64.8158L65.0343 21.7766L63.3953 22.5024L63.7231 28.4521C63.6808 29.4708 63.8253 30.4885 64.1493 31.4545C64.5692 31.8251 65.0713 32.0891 65.6134 32.2243L65.3839 33.3241H59.2106L58.9811 32.2243L60.7075 31.6744C60.7075 30.5747 60.4562 26.3296 60.4125 23.2393L57.0362 31.9164C56.193 31.9934 55.3446 31.9934 54.5013 31.9164C53.7256 30.1018 52.1413 25.8347 50.9503 23.2503L50.841 27.1214C50.6943 28.54 50.6943 29.97 50.841 31.3885C51.0049 31.8174 51.9336 31.9934 52.6985 32.2243L52.5018 33.3461Z"
        fill="white"
      />
      <path
        d="M69.6889 31.6964C69.8142 30.6714 69.869 29.6388 69.8528 28.6061V25.4278C69.9061 24.4626 69.8141 23.4948 69.5796 22.5574C69.1598 22.1842 68.658 21.9166 68.1155 21.7766L68.3559 20.6768H73.3929C75.6765 20.6768 77.5121 20.6768 79.009 20.5228C79.1948 20.7758 79.4461 21.1607 79.5772 21.3917C79.4352 22.2825 79.0855 23.8881 78.9435 24.526C78.3118 24.541 77.6799 24.5079 77.0532 24.427L76.5834 22.3485C75.9516 22.2422 75.3119 22.1907 74.6713 22.1945C74.1031 22.1945 73.5787 22.1945 73.1307 22.1945C73.1307 22.7554 72.9996 24.0311 72.9996 25.4388V26.3736L76.8128 26.1536L77.1734 26.6265C77.0969 27.1104 77.0095 27.6603 76.9112 28.1332L72.9996 27.9902V28.6171C72.9462 29.5823 73.0383 30.55 73.2727 31.4875C73.31 31.5305 73.3502 31.5709 73.3929 31.6085C73.918 31.8417 74.4925 31.94 75.0646 31.8944C75.6509 31.8992 76.2363 31.8476 76.8128 31.7404L77.4466 29.5409C78.1328 29.5176 78.8198 29.5507 79.5007 29.6399C79.5007 30.8496 79.5007 32.1143 79.5007 33.3791H68.3559L68.1155 32.2793L69.6889 31.6964ZM76.3102 15.376C76.827 16.0403 77.2363 16.7826 77.5231 17.5755L77.2062 18.2243L72.0599 19.5331L71.743 19.3791L71.4262 18.4113C72.8575 17.4325 74.6931 16.2888 76.3102 15.376Z"
        fill="white"
      />
      <path
        d="M83.2266 31.6304C84.5979 30.159 85.8238 28.5568 86.8869 26.8465C85.8146 25.3223 84.6659 23.854 83.4451 22.4474C82.9608 22.1811 82.4567 21.9532 81.9373 21.7656L82.1777 20.6658C83.5871 20.6658 85.3463 20.6658 86.5482 20.5888C87.4598 22.2814 88.4743 23.9158 89.5857 25.4828C90.1757 24.383 90.7439 23.4042 91.2137 22.5134C90.6434 22.2224 90.0516 21.9761 89.4436 21.7766L89.684 20.6768H95.3548L95.5952 21.7766C95.2127 21.9525 94.6446 22.2385 94.2731 22.4364C92.9112 23.8236 91.7056 25.3579 90.6783 27.0114C92.0987 28.98 93.4864 30.7616 94.2184 31.5645C94.6941 31.8179 95.1828 32.0455 95.6826 32.2463L95.4422 33.3461C94.0545 33.3461 92.3063 33.3461 91.17 33.4341C90.2192 31.6843 89.1572 29.9981 87.9905 28.3862C87.3786 29.4859 86.7449 30.5857 86.275 31.5315C86.8213 31.7514 87.608 32.0154 88.3182 32.2353L88.0888 33.3351H82.0903L81.8608 32.2353C82.2323 32.0924 82.8223 31.8394 83.2266 31.6304Z"
        fill="white"
      />
      <path
        d="M99.616 31.6964C99.7414 30.6714 99.7961 29.6388 99.7799 28.6061V25.4278C99.8333 24.4626 99.7412 23.4948 99.5068 22.5574C99.0867 22.1846 98.585 21.917 98.0426 21.7766L98.283 20.6768H104.424L104.664 21.7766L103.091 22.3485C102.965 23.3735 102.91 24.4061 102.927 25.4388V28.6171C102.882 29.5797 102.981 30.5437 103.222 31.4765C103.64 31.8493 104.143 32.1136 104.686 32.2463L104.445 33.3461H98.283L98.0426 32.2463L99.616 31.6964Z"
        fill="white"
      />
      <path
        d="M115.962 31.2675C116.238 30.5479 116.475 29.8136 116.672 29.068C117.401 29.0574 118.131 29.0867 118.857 29.156C118.857 29.9368 118.934 31.1685 118.934 31.8724L118.65 32.4443C117.195 33.2987 115.537 33.7361 113.853 33.709C109.668 33.709 107.079 31.2675 107.079 27.2754C107.088 26.345 107.283 25.4261 107.651 24.5728C108.02 23.7195 108.554 22.9492 109.224 22.3074C109.893 21.6656 110.683 21.1653 111.548 20.8361C112.412 20.5069 113.334 20.3556 114.257 20.3909C115.87 20.3797 117.462 20.7567 118.901 21.4906L119.218 22.0405C119.043 23.0083 118.726 24.405 118.508 25.3398C117.851 25.344 117.194 25.311 116.541 25.2408C116.43 24.4371 116.221 23.6502 115.918 22.8983C115.306 22.552 114.62 22.3591 113.918 22.3361C113.216 22.3132 112.519 22.4607 111.886 22.7664C110.984 24.0046 110.515 25.5092 110.553 27.0444C110.553 29.8048 111.941 31.6524 114.268 31.6524C114.855 31.6631 115.436 31.5311 115.962 31.2675Z"
        fill="white"
      />
      <path
        d="M121.6 27.3964C121.586 26.4665 121.759 25.5434 122.107 24.682C122.455 23.8205 122.972 23.0383 123.626 22.3817C124.28 21.7251 125.059 21.2077 125.916 20.86C126.773 20.5123 127.691 20.3416 128.614 20.3579C132.384 20.3579 134.984 22.7334 134.984 26.6375C135.016 27.5582 134.861 28.4757 134.529 29.3343C134.198 30.193 133.697 30.9751 133.056 31.6331C132.416 32.2911 131.649 32.8115 130.803 33.1627C129.957 33.5138 129.049 33.6884 128.134 33.676C124.266 33.676 121.6 31.3005 121.6 27.3964ZM130.745 31.0586C131.29 29.9058 131.556 28.6395 131.521 27.3634C131.521 24.2071 130.57 22.3045 128.188 22.3045C127.476 22.2844 126.774 22.4839 126.178 22.8763C125.412 24.114 125.031 25.5542 125.085 27.0114C125.085 29.9478 126.375 31.7734 128.549 31.7734C129.344 31.8183 130.127 31.5634 130.745 31.0586Z"
        fill="white"
      />
    </svg>
  );
}
