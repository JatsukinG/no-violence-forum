"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-120 bg-image">
        <div className="container">
          <div className="section-title">
            <span>Info Update!</span>
            <h2>
              Our Latest <b>News</b>
            </h2>

            <div className="bg-title">Blog</div>

            <Link href="/blog" className="btn btn-primary">
              View All News
            </Link>

            <div className="bar"></div>
          </div>

          <div className="row">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="blog-slides"
            >
              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog1.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Technology</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">25 Feb, 2024</span>
                    <h3>
                      <Link href="/blog/details">
                        The Most Popular New top Business Apps
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog2.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">Agency</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">27 Feb, 2024</span>
                    <h3>
                      <Link href="/blog/details">
                        The Best Marketing top Management Tools
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog3.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">IT</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">28 Feb, 2024</span>
                    <h3>
                      <Link href="/blog/details">
                        3 WooCommerce Plugins to Boost Sales
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog4.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog/details">IT</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">28 Feb, 2024</span>
                    <h3>
                      <Link href="/blog/details">
                        How To Setup Redux In React Next Application
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
