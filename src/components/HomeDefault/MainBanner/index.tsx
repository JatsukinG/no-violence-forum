import React from 'react'
import Image from 'next/image'
import Countdown from './Countdown'
import Link from 'next/link'

const MainBanner: React.FC = () => {
  return (
      <>
        <div
            className="main-banner"
            style={{
              backgroundColor: '#fff6ca',
            }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="d-flex align-items-center flex-column flex-lg-row">
                  <Image
                      src="/images/no-violence/no-violence-map.png"
                      alt="no-violence-forum"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: '500px' }}
                      className=""
                  />
                  <Image
                      src="/images/no-violence/no-violence-word.png"
                      alt="no-violence-forum"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'aut', height: 'auto', flexGrow: 1 }}
                  />
                </div>
                <div className="w-100 d-flex mt-5">
                  <div className="mx-auto button-box">
                    <Link href="#" className="btn btn-primary">
                      Inscríbite ahora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown */}
          {/*<Countdown endDate=""/>*/}

          {/* Shape Images */}
          <div className="shape1">
            <Image
                src="/images/shapes/1.png"
                alt="shape1"
                width={77}
                height={77}
            />
          </div>
          <div className="shape2 rotateme">
            <Image
                src="/images/shapes/2.png"
                alt="shape2"
                width={38}
                height={38}
            />
          </div>
          <div className="shape3 rotateme">
            <Image
                src="/images/shapes/3.png"
                alt="shape3"
                width={51}
                height={57}
            />
          </div>
          <div className="shape4">
            <Image
                src="/images/shapes/4.png"
                alt="shape4"
                width={29}
                height={29}
            />
          </div>
        </div>
      </>
  )
}

export default MainBanner
