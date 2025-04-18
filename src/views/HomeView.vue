<script setup lang="ts">
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
</script>

<template>
  <main>
    <div class="fables-transparent py-3 py-lg-0 position-fixed">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <nav class="navbar navbar-expand-md btco-hover-menu py-lg-2">
              <!-- Brand di kiri -->
              <a class="navbar-brand fables-logo-brand pl-0" href="/">
                <div class="logo-nav">DiveraTech</div>
              </a>

              <!-- Hamburger button untuk mobile -->
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#fablesNavDropdown"
                aria-controls="fablesNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="fables-iconmenu-icon text-white font-16"></span>
              </button>

              <!-- Menu di kanan -->
              <div class="collapse navbar-collapse justify-content-end" id="fablesNavDropdown">
                <ul class="navbar-nav fables-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="/" id="sub-nav1"> Beranda </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="/" id="sub-nav1"> Tentang Kami </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="/" id="sub-nav1"> Layanan Kami </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="/" id="sub-nav1"> Portofolio </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" style="text-decoration: underline" href="/" id="sub-nav1">
                      <b>Hubungi Kami</b>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- section header -->
    <div
      class="fables-header fables-after-overlay overlay-lighter index-traingle bg-rules"
      style="background-image: url(assets/custom/images/index-background.jpg)"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-7 mr-auto index-carousel">
            <div
              class="owl-carousel owl-theme default-carousel nav-0 z-index mt-md-4 mt-xl-5 pt-md-4 pt-xl-5 dots-0 pb-md-5"
            >
              <div
                class="pt-0 mt-0 pt-xl-5 mt-xl-5 wow slideInUp"
                data-wow-duration="2s"
                data-wow-delay=".4s"
              >
                <h1 class="fables-main-text-color font-weight-bold mb-1">
                  SOLUSI DIGITAL UNTUK
                  <span class="fables-second-text-color">PERTUMBUHAN BISNISMU</span>
                </h1>
                <p class="fables-forth-text-color mb-3 fables-header-slider-details">
                  <b style="font-weight: 600; color: black !important">DiveraTech</b> hadir sebagai
                  partner teknologi untuk membangun sistem yang efektif, efisien, dan scalable. Kami
                  bantu bisnismu tumbuh lewat solusi digital yang tepat guna.
                </p>
                <a
                  href="#"
                  class="btn fables-second-background-color fables-second-border-color white-color rounded-0 mr-4 px-3 px-md-4 py-2 bg-hover-transparent fables-second-hover-color"
                  >Our Services</a
                >
                <a
                  href="#"
                  class="btn fables-second-border-color fables-second-text-color rounded-0 px-3 px-md-4 py-2 fables-second-hover-background-color"
                  >Learn More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section header -->
    <!-- section data trend -->
    <section class="py-5 bg-light" id="data-trend">
      <div class="container">
        <h2
          class="text-center font-weight-bold mb-5 fables-main-text-color"
          style="margin-bottom: 16px !important"
        >
          Data Tren Digital
        </h2>
        <p class="text-center fables-forth-text-color mb-5">
          Fakta dan data terbaru tentang pentingnya aplikasi web bagi bisnis masa kini.
        </p>

        <div class="row">
          <!-- Card 1 -->
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-start bg-white shadow rounded h-100 p-4">
              <div class="mr-3 text-center">
                <div
                  class="rounded-circle fables-second-background-color text-white font-weight-bold d-flex align-items-center justify-content-center"
                  style="width: 60px; height: 60px; font-size: 18px"
                >
                  35%
                </div>
              </div>
              <div>
                <h5 class="font-weight-bold fables-second-text-color mb-2">
                  Loyalitas Pelanggan Meningkat
                </h5>
                <p class="fables-forth-text-color mb-1">
                  Bisnis dengan aplikasi sendiri memiliki retensi pelanggan 35% lebih tinggi
                  dibanding yang hanya mengandalkan media sosial atau marketplace.
                </p>
                <small class="text-muted">– Adobe Digital Economy Index, 2022</small>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-start bg-white shadow rounded h-100 p-4">
              <div class="mr-3 text-center">
                <div
                  class="rounded-circle fables-second-background-color text-white font-weight-bold d-flex align-items-center justify-content-center"
                  style="width: 60px; height: 60px; font-size: 18px"
                >
                  68%
                </div>
              </div>
              <div>
                <h5 class="font-weight-bold fables-second-text-color mb-2">
                  Efisiensi Operasional UKM
                </h5>
                <p class="fables-forth-text-color mb-1">
                  UKM menggunakan aplikasi web internal untuk mempercepat proses kerja & menghemat
                  biaya.
                </p>
                <small class="text-muted">– Clutch Survey, 2023</small>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-start bg-white shadow rounded h-100 p-4">
              <div class="mr-3 text-center">
                <div
                  class="rounded-circle fables-second-background-color text-white font-weight-bold d-flex align-items-center justify-content-center"
                  style="width: 60px; height: 60px; font-size: 18px"
                >
                  76%
                </div>
              </div>
              <div>
                <h5 class="font-weight-bold fables-second-text-color mb-2">
                  Pengalaman Digital Konsisten
                </h5>
                <p class="fables-forth-text-color mb-1">
                  Konsumen memilih brand yang memberikan pengalaman digital konsisten melalui
                  aplikasi web.
                </p>
                <small class="text-muted">– Forbes, 2024</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- endsection data trend -->

    <!-- section why choose us -->
    <section class="fables-light-background py-5" id="why-choose-us">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fables-main-text-color font-30 font-weight-bold">
            Mengapa Memilih <span class="fables-second-text-color">DiveraTech?</span>
          </h2>
          <p class="fables-forth-text-color mt-3">
            Kami bukan sekadar penyedia layanan, kami mitra strategis yang membantu bisnis Anda
            bertumbuh melalui solusi digital yang dirancang secara menyeluruh dan berorientasi
            hasil.
          </p>
        </div>
        <div class="row text-center">
          <div class="col-md-6 col-lg-6 mb-4">
            <div class="p-4 border rounded bg-white h-100 wow fadeInUp" data-wow-delay="0.1s">
              <i class="fas fa-cogs fa-3x fables-main-text-color mb-3 d-block"></i>
              <h4 class="font-18 semi-font fables-main-text-color">Solusi Kustom</h4>
              <p class="fables-forth-text-color mt-2">
                Setiap bisnis itu unik. Kami mengembangkan sistem yang benar-benar disesuaikan
                dengan kebutuhan dan proses operasional Anda.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 mb-4">
            <div class="p-4 border rounded bg-white h-100 wow fadeInUp" data-wow-delay="0.2s">
              <i class="fas fa-award fa-3x fables-main-text-color mb-3 d-block"></i>
              <h4 class="font-18 semi-font fables-main-text-color">Berpengalaman</h4>
              <p class="fables-forth-text-color mt-2">
                Tim kami telah menyelesaikan berbagai proyek pengembangan aplikasi lintas industri,
                dengan standar profesionalisme dan hasil yang terbukti.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 mb-4">
            <div class="p-4 border rounded bg-white h-100 wow fadeInUp" data-wow-delay="0.3s">
              <i class="fas fa-wallet fa-3x fables-main-text-color mb-3 d-block"></i>
              <h4 class="font-18 semi-font fables-main-text-color">Efisien dan Hemat</h4>
              <p class="fables-forth-text-color mt-2">
                Kami memastikan setiap solusi digital yang dikembangkan membawa efisiensi nyata,
                tanpa pemborosan anggaran.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 mb-4">
            <div class="p-4 border rounded bg-white h-100 wow fadeInUp" data-wow-delay="0.4s">
              <i class="fas fa-headset fa-3x fables-main-text-color mb-3 d-block"></i>
              <h4 class="font-18 semi-font fables-main-text-color">Dukungan Berkelanjutan</h4>
              <p class="fables-forth-text-color mt-2">
                Kami mendampingi Anda dari awal hingga akhir proyek—dan tetap hadir setelahnya
                melalui layanan dukungan dan konsultasi yang responsif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- endsection why choose us -->
    <!-- section our services -->
    <section class="py-5 bg-light" id="data-trend">
      <div class="container">
        <h2
          class="text-center font-weight-bold mb-5 fables-second-text-color"
          style="margin-bottom: 16px !important"
        >
          Our Services
        </h2>
        <p class="text-center fables-forth-text-color mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid
          quam, consequatur.quisquam consectetur culpa commodi maxime in harum sunt nam.
        </p>

        <div class="row">
          <div
            class="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"
            data-wow-delay=".4s"
            data-wow-duration="1.5s"
          >
            <div class="row text-center text-md-left">
              <div class="col-12 col-md-3">
                <span class="fables-iconhead-set-light fables-second-text-color fa-3x"></span>
              </div>
              <div class="col-12 col-md-9 pl-md-0">
                <h2 class="fables-main-text-color font-20 my-2 mt-md-0 semi-font">
                  Free Updates & Support
                </h2>
                <div class="font-15 fables-forth-text-color">
                  Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim
                  at.
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"
            data-wow-delay=".8s"
            data-wow-duration="1.5s"
          >
            <div class="row text-center text-md-left">
              <div class="col-12 col-md-3">
                <span class="fables-iconscreen fables-second-text-color fa-3x"></span>
              </div>
              <div class="col-12 col-md-9 pl-md-0">
                <h2 class="fables-main-text-color font-20 my-2 mt-md-0 semi-font">
                  Highly Customizable
                </h2>
                <div class="font-15 fables-forth-text-color">
                  Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim
                  at.
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"
            data-wow-delay="1.2s"
            data-wow-duration="1.5s"
          >
            <div class="row text-center text-md-left">
              <div class="col-12 col-md-3">
                <span class="fables-iconfile fables-second-text-color fa-3x"></span>
              </div>
              <div class="col-12 col-md-9 pl-md-0">
                <h2 class="fables-main-text-color font-20 my-2 mt-md-0 semi-font">
                  Drag & Drop Page Builder
                </h2>
                <div class="font-15 fables-forth-text-color">
                  Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim
                  at.
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"
            data-wow-delay="1.6s"
            data-wow-duration="1.5s"
          >
            <div class="row text-center text-md-left">
              <div class="col-12 col-md-3">
                <span class="fables-iconhead-set-light fables-second-text-color fa-3x"></span>
              </div>
              <div class="col-12 col-md-9 pl-md-0">
                <h2 class="fables-main-text-color font-20 my-2 mt-md-0 semi-font">
                  Free Updates & Support
                </h2>
                <div class="font-15 fables-forth-text-color">
                  Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim
                  at.
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"
            data-wow-delay="2s"
            data-wow-duration="1.5s"
          >
            <div class="row text-center text-md-left">
              <div class="col-12 col-md-3">
                <span class="fables-iconscreen fables-second-text-color fa-3x"></span>
              </div>
              <div class="col-12 col-md-9 pl-md-0">
                <h2 class="fables-main-text-color font-20 my-2 mt-md-0 semi-font">
                  Highly Customizable
                </h2>
                <div class="font-15 fables-forth-text-color">
                  Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim
                  at.
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-4 pt-3 pt-md-5 wow zoomIn"
            data-wow-delay="2.4s"
            data-wow-duration="1.5s"
          >
            <div class="row text-center text-md-left">
              <div class="col-12 col-md-3">
                <span class="fables-iconfile fables-second-text-color fa-3x"></span>
              </div>
              <div class="col-12 col-md-9 pl-md-0">
                <h2 class="fables-main-text-color font-20 my-2 mt-md-0 semi-font">
                  Drag & Drop Page Builder
                </h2>
                <div class="font-15 fables-forth-text-color">
                  Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem pretium laoreet enim
                  at.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- endsection our services -->
    <!-- section portfolio -->
    <div class="row">
      <div class="container mb-4 py-5 mb-md-5">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div class="text-center">
              <h2 class="fables-main-text-color font-35 font-weight-bold mb-4">Latest Works</h2>
              <p class="fables-forth-text-color">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum
                aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum sunt
                nam.
              </p>
            </div>
          </div>
        </div>

        <div class="gallery-filter">
          <div class="portfolioFilter my-3 clearfix">
            <a href="#" data-filter="*" class="current">ALL</a>
            <a href="#" data-filter=".webDesign" class="fables-forth-text-color">Web design</a>
            <a href="#" data-filter=".appDesign" class="fables-forth-text-color">App design</a>
            <a href="#" data-filter=".brand" class="fables-forth-text-color">Brand</a>
            <a href="#" data-filter=".development" class="fables-forth-text-color">Development</a>
          </div>
          <div class="portfolioContainer row filter-masonry">
            <div class="drawings places col-sm-6 col-md-3 mb-2">
              <div
                class="filter-img-block position-relative image-container translate-effect-right"
              >
                <img src="/assets/custom/images/index-testimonial1.jpg" alt="image" class="w-100" />
                <div class="img-filter-overlay fables-main-color-transparent row m-0">
                  <a href="#" class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconlink"></span
                  ></a>
                  <a
                    data-fancybox="gallery"
                    href="/assets/custom/images/index-testimonial1.jpg"
                    class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconsearch-icon"></span
                  ></a>
                </div>
              </div>
            </div>

            <div class="webDesign food col-sm-6 col-md-3 mb-2">
              <div
                class="filter-img-block position-relative image-container translate-effect-right"
              >
                <img src="/assets/custom/images/index-testimonial2.jpg" alt="image" class="w-100" />
                <div class="img-filter-overlay fables-main-color-transparent row m-0">
                  <a href="#" class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconlink"></span
                  ></a>
                  <a
                    data-fancybox="gallery"
                    href="/assets/custom/images/index-testimonial2.jpg"
                    class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconsearch-icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="webDesign objects col-sm-6 col-md-3 mb-2">
              <div
                class="filter-img-block position-relative image-container translate-effect-right"
              >
                <img src="/assets/custom/images/index-testimonial3.jpg" alt="image" class="w-100" />
                <div class="img-filter-overlay fables-main-color-transparent row m-0">
                  <a href="#" class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconlink"></span
                  ></a>
                  <a
                    data-fancybox="gallery"
                    href="/assets/custom/images/index-testimonial3.jpg"
                    class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconsearch-icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="appDesign brand col-sm-6 col-md-3 mb-2">
              <div
                class="filter-img-block position-relative image-container translate-effect-right"
              >
                <img src="/assets/custom/images/index-testimonial4.jpg" alt="image" class="w-100" />
                <div class="img-filter-overlay fables-main-color-transparent row m-0">
                  <a href="#" class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconlink"></span
                  ></a>
                  <a
                    data-fancybox="gallery"
                    href="/assets/custom/images/index-testimonial4.jpg"
                    class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconsearch-icon"></span
                  ></a>
                </div>
              </div>
            </div>

            <div class="webDesign col-sm-6 col-md-3 mb-2">
              <div
                class="filter-img-block position-relative image-container translate-effect-right"
              >
                <img src="/assets/custom/images/index-testimonial5.jpg" alt="image" class="w-100" />
                <div class="img-filter-overlay fables-main-color-transparent row m-0">
                  <a href="#" class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconlink"></span
                  ></a>
                  <a
                    data-fancybox="gallery"
                    href="/assets/custom/images/index-testimonial5.jpg"
                    class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconsearch-icon"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="webDesign col-sm-6 col-md-3 mb-2">
              <div
                class="filter-img-block position-relative image-container translate-effect-right"
              >
                <img src="/assets/custom/images/index-testimonial5.jpg" alt="image" class="w-100" />
                <div class="img-filter-overlay fables-main-color-transparent row m-0">
                  <a href="#" class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconlink"></span
                  ></a>
                  <a
                    data-fancybox="gallery"
                    href="/assets/custom/images/index-testimonial5.jpg"
                    class="gallery-filter-icon white-color fables-second-hover-color"
                    ><span class="fables-iconsearch-icon"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              href="#"
              class="btn fables-main-border-color fables-main-text-color mt-md-4 px-5 py-2 fables-btn-rounded fables-main-hover-background-color white-color-hover"
              >Show All Projects</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- endsection portfolio -->
    <!-- section kata2 iklan -->
    <div class="row">
      <div class="col-sm-12"></div>
    </div>
    <!-- endsection kata2 iklan -->
    <!-- section contact us -->
    <div class="row">
      <div class="col-sm-12"></div>
    </div>
    <!-- endsection contact us -->
    <!-- section footer -->
    <div class="row">
      <div class="col-sm-12"></div>
    </div>
    <!-- endsection footer -->
  </main>
</template>
