import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-">
          {/* Moving Banner */}
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 py-4 px-6 shadow-lg">
      <div className="relative flex items-center w-full">
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee inline-flex whitespace-nowrap">
            <span className="text-white text-base md:text-lg font-medium">
              🌟 Join our exclusive invite-only community! 🌟 Unlock premium access,
              creator perks, personalized support, and much more. Spots are
              limited, secure your invite now! 💎
            </span>
            <span className="text-white text-base md:text-lg font-medium ml-12">
              🌟 Join our exclusive invite-only community! 🌟 Unlock premium access,
              creator perks, personalized support, and much more. Spots are
              limited, secure your invite now! 💎
            </span>
          </div>
        </div>
        <a href="https://forms.gle/zoBmSRGZXYQj54S5A" className="shrink-0 rounded-md bg-white px-4 py-2 ml-4 text-sm md:text-base font-semibold text-indigo-700 hover:bg-indigo-100">
          Join Now
        </a>
      </div>
    </div>

          {/* Section header */}
          <div className="py-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-[3.1rem]"
              data-aos="fade-up"
            >
              Connect Your Brand to the Right Audience,
              <br />
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                the Creative Way.
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
Discover creators with our intelligent matching engine to craft campaigns tailored to Gen Z and Millennial shopping habits, driving maximum conversions and expanding your brand's reach to niche audiences.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=josekjames5@gmail.com"
                  >
                    <span className="relative inline-flex items-center">
                      Contact
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://forms.gle/zoBmSRGZXYQj54S5A"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
