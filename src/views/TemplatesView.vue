<template>
  <main>
    <!-- ...Header & Banner existing... -->
    <!-- Start Section Navbar -->
    <header
      class="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="" class="logo">
                <img
                  :src="'/assets/images/Logo/LogoDiveraTech_Lengkap_BGTransparent_TextBiru.png'"
                  style="height: 50px"
                  alt="DiveraTech"
                />
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section"><a href="/">Beranda</a></li>
                <li class="scroll-to-section"><a href="/tentang-kami">Tentang Kami</a></li>
                <li class="scroll-to-section"><a href="/#layanan">Layanan Kami</a></li>
                <li class="scroll-to-section"><a href="/#portofolio">Portofolio</a></li>
                <li>
                  <div class="btn-navbar-btn">
                    <a href="/produk">Produk Kami</a>
                    <span class="badge-hot"><i class="bi bi-fire"></i> Hot!</span>
                  </div>
                </li>
              </ul>
              <a class="menu-trigger"> <span>Menu</span> </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- End Section -->
    <!-- Start Section Header -->
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div
                  class="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <h2 style="color: #036ece; margin-bottom: 10px !important">
                        Pilihan Template Landing Page
                      </h2>

                      <p
                        class="motto"
                        style="font-size: 1.2rem; font-weight: 500; margin-bottom: 30px !important"
                      >
                        Tingkatkan kredibilitas bisnis Anda dengan
                        <strong>Landing Page Premium</strong> dari <strong>DiveraTech!</strong>
                      </p>

                      <p
                        style="
                          font-size: 1.2rem;
                          font-weight: 500;
                          margin-top: 15px;
                          line-height: 1.4;
                          margin-bottom: 16px;
                        "
                      >
                        Mulai dari
                        <span
                          style="text-decoration: line-through; color: #ff0004; margin-left: 8px"
                          >Rp. 1.199.000</span
                        >
                        <br />
                        <span class="produk-text-header">Rp. 499.000</span>
                        <span style="font-size: 1.2rem; font-weight: 600; color: #036ece">
                          (Satu kali bayar)<span style="color: #ff0004">*</span></span
                        >
                      </p>

                      <p
                        style="
                          font-size: 0.75rem;
                          color: #ff0004;
                          margin-top: 5px;
                          line-height: 1.3;
                        "
                      >
                        <span style="color: #ff0004">*</span>Harga sudah termasuk domain & hosting
                        <strong>selama 1 tahun</strong>. <br />
                        <span style="color: #ff0004">*</span>Gratis konsultasi desain sebelum
                        pembelian.
                      </p>
                    </div>

                    <div class="col-lg-12 btn-header">
                      <a href="#landing-templates" class="btn btn-header-btn">
                        <i class="bi bi-cart-check"></i> Pilih Template Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img :src="'/assets/images/LP-Banner.png'" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EndSection -->
    <!-- Section: Landing Page Templates -->
    <section
      id="landing-templates"
      class="produk-section py-5"
      style="background-color: rgba(241, 244, 255, 0.977) !important"
    >
      <div class="produk-landing">
        <div class="container mt-5 mb-5">
          <!-- Heading -->
          <div class="row mb-4">
            <div class="col-lg-12 text-center">
              <div class="section-heading">
                <h4 style="color: #036ece">Pilih Desain Landing Page Anda</h4>
              </div>
            </div>
          </div>

          <!-- Grid 3x3 -->
          <div class="row g-4">
            <div
              class="kategori-filters text-center mb-4"
              style="
                padding: 0px 200px !important;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px 15px;
              "
            >
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="['filter-button me-2', { active: selectedCategory === category }]"
              >
                {{ category }}
              </button>
            </div>

            <!-- Template Cards -->
            <div
              class="col-lg-4 col-md-6 col-sm-12"
              v-for="template in paginatedTemplatesFiltered"
              :key="template.id"
            >
              <div class="card h-100 shadow-sm produk-card">
                <div class="card-img-wrapper">
                  <img
                    :src="baseUrl + 'storage/' + template.gambar"
                    class="card-img-top"
                    :alt="template.judul"
                  />
                  <div class="overlay">
                    <h5 class="card-title mb-3">{{ template.judul }}</h5>

                    <div class="overlay-buttons">
                      <a :href="template.link" target="_blank" class="btn btn-blue mr-3"> Lihat </a>
                      <button
                        class="btn btn-secondary"
                        style="margin-left: 10px !important"
                        data-bs-toggle="modal"
                        data-bs-target="#purchaseModal"
                        @click="form.template_id = template.id"
                      >
                        Pilih Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="row mt-4">
            <div class="col text-center">
              <nav>
                <ul class="pagination justify-content-center">
                  <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="prevPage">Prev</button>
                  </li>

                  <li
                    v-for="page in totalPages"
                    :key="page"
                    class="page-item"
                    :class="{ active: currentPage === page }"
                  >
                    <button class="page-link" @click="goToPage(page)">{{ page }}</button>
                  </li>

                  <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="nextPage">Next</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div
      class="modal fade"
      id="purchaseModal"
      tabindex="-1"
      aria-labelledby="purchaseModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content p-5">
          <div class="modal-header">
            <h5 class="modal-title text-black text-bold" id="purchaseModalLabel">
              Pilih Paket & Lengkapi Data
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <!-- Template -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Template yang Dipilih</h6>
              <p class="text-black">
                <strong>Nama Template :</strong>
                <span id="selectedTemplate"> {{ selectedTemplateName }}</span>
              </p>
            </div>

            <!-- Paket -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Pilih Paket<span style="color: #ff0004">*</span></h6>
              <div class="paket-modal mt-2">
                <div class="row g-3">
                  <div class="col-lg-4">
                    <div class="card paket-card h-100">
                      <div class="card-header text-white bg-blue fw-bold text-center">
                        Paket Lite
                      </div>
                      <div class="card-body text-center">
                        <p class="card-old-price text-danger text-decoration-line-through">
                          Rp. 1.199.000
                        </p>
                        <h6 class="text-blue text-bold fs-4">Rp. 499.000</h6>
                        <p><strong>Domain (.site, .my.id, .xyz)</strong></p>

                        <button
                          class="btn w-100"
                          :class="form.paket === 'Lite' ? 'btn-success' : 'btn-outline-blue'"
                          @click="pilihPaket('Lite', 499000)"
                        >
                          {{ form.paket === 'Lite' ? 'Dipilih' : 'Pilih Paket' }}
                        </button>
                        <input type="hidden" id="paketInput" name="paket" />
                        <input type="hidden" id="hargaInput" name="harga" />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card paket-card h-100">
                      <div class="card-header text-white bg-blue fw-bold text-center">
                        Paket Regular
                      </div>
                      <div class="card-body text-center">
                        <p class="card-old-price text-danger text-decoration-line-through">
                          Rp. 1.599.000
                        </p>
                        <h6 class="text-blue text-bold fs-4">Rp. 799.000</h6>
                        <p><strong>Domain (.com & .id)</strong></p>

                        <button
                          class="btn w-100"
                          :class="form.paket === 'Regular' ? 'btn-success' : 'btn-outline-blue'"
                          @click="pilihPaket('Regular', 799000)"
                        >
                          {{ form.paket === 'Regular' ? 'Dipilih' : 'Pilih Paket' }}
                        </button>
                        <input type="hidden" id="paketInput" name="paket" />
                        <input type="hidden" id="hargaInput" name="harga" />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card paket-card h-100">
                      <div class="card-header text-white bg-blue fw-bold text-center">
                        Paket Pro
                      </div>
                      <div class="card-body text-center">
                        <p class="card-old-price text-danger text-decoration-line-through">
                          Rp. 1.999.000
                        </p>
                        <h6 class="text-blue text-bold fs-4">Rp. 1.199.000</h6>
                        <p><strong>Domain (.co.id, .tech, .org, .io, .net)</strong></p>

                        <button
                          class="btn w-100"
                          :class="form.paket === 'Pro' ? 'btn-success' : 'btn-outline-blue'"
                          @click="pilihPaket('Pro', 1199000)"
                        >
                          {{ form.paket === 'Pro' ? 'Dipilih' : 'Pilih Paket' }}
                        </button>
                        <input type="hidden" id="paketInput" name="paket" />
                        <input type="hidden" id="hargaInput" name="harga" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Nama Domain -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Nama Domain<span style="color: #ff0004">*</span></h6>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Contoh: tokoku.com"
                v-model="form.nama_domain"
              />
              <div class="form-text text-muted">
                <span style="color: #ff0004">*</span>Pastikan sesuai dengan ekstensi paket yang
                dipilih (.com, .id, dll).
              </div>
            </div>

            <!-- Form Data Diri -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Data Diri</h6>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Nama Lengkap<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Masukkan Nama Lengkap Anda"
                      v-model="form.nama_lengkap"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Email<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Masukkan Email Anda"
                      v-model="form.email"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >No. WhatsApp<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Masukkan Nomor WA Anda"
                      v-model="form.no_wa"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Alamat<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Alamat Lengkap Anda"
                      v-model="form.alamat"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Nama Bisnis<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Masukkan Nama Bisnis Anda"
                      v-model="form.nama_bisnis"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Alamat Bisnis<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Alamat Bisnis Anda"
                      v-model="form.alamat_bisnis"
                    />
                  </div>
                </div>
              </form>
            </div>

            <!-- Paket Berlangganan -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">
                Paket Berlangganan<span style="color: #ff0004">*</span>
              </h6>
              <select class="form-select mt-2" v-model="form.durasi_tahun">
                <option disabled value="">Pilih Paket</option>
                <option value="1">1 Tahun</option>
                <option value="2">2 Tahun</option>
                <option value="3">3 Tahun</option>
              </select>
            </div>

            <!-- Total Harga -->
            <div class="mb-4 text-end">
              <h6 class="text-blue text-bold">Rincian Harga</h6>
              <p class="mb-1 text-black">
                <strong>Subtotal Paket:</strong>
                <span id="subtotalHarga">Rp. {{ form.harga.toLocaleString('id-ID') }}</span>
              </p>
              <p class="mb-1 text-black">
                <strong>Biaya Tambahan:</strong>
                <span id="biayaTambahan"
                  >Rp. {{ (totalBiaya - form.harga).toLocaleString('id-ID') }}</span
                >
              </p>
              <h5 class="fw-bold text-success">
                Total:
                <span id="totalHarga" class="text-bold"
                  >Rp. {{ totalBiaya.toLocaleString('id-ID') }}</span
                >
              </h5>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn-primary" data-bs-dismiss="modal">Batal</button>
            <button
              type="button"
              class="btn-primary"
              @click="submitOrder"
              :disabled="loading || loadingPayment"
            >
              <span v-if="!loading && !loadingPayment">Lanjutkan Pembelian</span>
              <span v-else>
                <i class="spinner-border spinner-border-sm me-2"></i>
                <span v-if="loading">Memproses...</span>
                <span v-else-if="loadingPayment">Memverifikasi Pembayaran...</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <section class="produk-section py-5">
      <div class="container mt-5 mb-5">
        <div class="row mb-4">
          <div class="col-lg-12 text-center section-heading mb-3">
            <h4 style="color: #036ece">Harga Terjangkau, Cocok untuk Semua!</h4>
            <p class="text-black">
              Sekarang Anda dapat membuat website profesional untuk bisnis Anda dengan harga yang
              terjangkau.
            </p>
          </div>
        </div>
        <div class="paket-landingpage">
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card shadow paket-main-card text-center">
                <div class="card-body">
                  <h5 class="card-title">Paket Lite</h5>
                  <div class="card shadow-sm paket-inner-card mt-3">
                    <div class="card-body">
                      <p
                        class="card-old-price"
                        style="
                          text-decoration: line-through;
                          color: #ff0004;
                          font-size: 16px;
                          margin-bottom: 5px;
                        "
                      >
                        Rp. 1.199.000
                      </p>
                      <p class="card-price">
                        <span class="currency">Rp.</span>
                        <span class="amount">499</span>
                        <span class="suffix">.000</span>
                      </p>
                      <p class="card-text text-bold">Domain (.site), (.my.id), (.xyz)</p>
                      <ul class="paket-features">
                        <li>Include Hosting</li>
                        <li>Free SSL Security</li>
                        <li>Free Biaya Setup</li>
                        <li>SEO Basic</li>
                        <li>Akses Admin Page</li>
                        <li>Pengerjaan <b>2 Hari</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card shadow paket-main-card text-center">
                <div class="card-body">
                  <h5 class="card-title">Paket Regular</h5>
                  <div class="card shadow-sm paket-inner-card mt-3">
                    <div class="card-body">
                      <p
                        class="card-old-price"
                        style="
                          text-decoration: line-through;
                          color: #ff0004;
                          font-size: 16px;
                          margin-bottom: 5px;
                        "
                      >
                        Rp. 1.599.000
                      </p>
                      <p class="card-price">
                        <span class="currency">Rp.</span>
                        <span class="amount">799</span>
                        <span class="suffix">.000</span>
                      </p>
                      <p class="card-text text-bold">Domain (.com) & (.id)</p>
                      <ul class="paket-features">
                        <li>Include Hosting</li>
                        <li>Free SSL Security</li>
                        <li>Free Biaya Setup</li>
                        <li>SEO Basic</li>
                        <li>Akses Admin Page</li>
                        <li>Pengerjaan <b>2 Hari</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card shadow paket-main-card text-center">
                <div class="card-body">
                  <h5 class="card-title">Paket Pro</h5>
                  <div class="card shadow-sm paket-inner-card mt-3">
                    <div class="card-body">
                      <p
                        class="card-old-price"
                        style="
                          text-decoration: line-through;
                          color: #ff0004;
                          font-size: 16px;
                          margin-bottom: 5px;
                        "
                      >
                        Rp. 1.999.000
                      </p>
                      <p class="card-price">
                        <span class="currency">Rp.</span>
                        <span class="amount">1.199</span>
                        <span class="suffix">.000</span>
                      </p>
                      <p class="card-text text-bold">
                        Domain (.co.id), (.tech), (.org), (.io), (.net)
                      </p>
                      <ul class="paket-features">
                        <li>Include Hosting</li>
                        <li>Free SSL Security</li>
                        <li>Free Biaya Setup</li>
                        <li>SEO Basic</li>
                        <li>Akses Admin Page</li>
                        <li>Pengerjaan <b>2 Hari</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <a
      href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
      target="_blank"
      class="whatsapp-float"
    >
      <i class="fab fa-whatsapp"></i> <span class="whatsapp-text">Hubungi Kami!</span>
    </a>
    <footer id="newsletter">
      <div class="container">
        <div class="row">
          <!-- <div class="col-lg-2"></div> -->
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="footer-widget">
              <h4>About Us</h4>
              <div class="logo">
                <img
                  :src="'/assets/images/Logo/LogoDiveraTech_Lengkap_BGTransparent_TextPutih.png'"
                  alt=""
                  style="height: 60px; width: 150px"
                />
              </div>
              <p class="text-weight-400">
                Build Smarter. Launch Faster. With <b class="text-bold">DiveraTech!</b>
              </p>
              <p class="text-weight-400" style="text-align: justify !important">
                <strong>DiveraTech</strong> adalah partner solusi digital yang siap membantu bisnis
                Anda melalui Layanan IT lengkap dengan cepat, efisien, dan profesional dengan harga
                terjangkau
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12">
            <div class="footer-widget">
              <h4>Link</h4>
              <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/tentang-kami">Tentang Kami</a></li>
                <li><a href="#layanan">Layanan Kami</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#cta-section">Hubungi Kami</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="footer-widget">
              <h4>Hubungi Kami</h4>
              <ul>
                <li>
                  <a href="mailto:diveratech@gmail.com"
                    ><i class="fas fa-envelope"></i> diveratech@gmail.com</a
                  >
                </li>
                <li>
                  <a
                    href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
                    ><i class="fab fa-whatsapp"></i> (+62) 813-3086-5531</a
                  >
                </li>
                <li>
                  <a href="https://www.instagram.com/diveratech/"
                    ><i class="fab fa-instagram"></i> Instagram</a
                  >
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/diveratech/"
                    ><i class="fab fa-linkedin"></i> LinkedIn</a
                  >
                </li>
                <li>
                  <a href="https://www.facebook.com/people/DiveraTech/61576207515343/#"
                    ><i class="fab fa-facebook"></i> Facebook</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="footer-widget">
              <h4>Temukan Kami</h4>
              <ul>
                <li>
                  <a href="#">
                    <iframe
                      :src="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0813735149236!2d112.54547827499947!3d-7.231559192774584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7801bc912dd3d5%3A0xb3adb4ba8a9d9d5!2sDiveraTech!5e0!3m2!1sen!2sid!4v1746434422737!5m2!1sen!2sid'"
                      width="350"
                      height="300"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="copyright-text"><p id="copyright"></p></div>
      </div>
    </footer>

    <!-- ...WhatsApp Float & Footer existing... -->
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LandingTemplates',
  data() {
    return {
      baseUrl: 'https://backoffice.diveratech.site/',
      // baseUrl: 'http://127.0.0.1:8000/',
      categories: ['All'],
      selectedCategory: 'All',
      currentPage: 1,
      perPage: 9,
      templates: [],
      form: {
        template_id: '',
        harga: 0,
        paket: '',
        nama_domain: '',
        nama_lengkap: '',
        email: '',
        no_wa: '',
        alamat: '',
        nama_bisnis: '',
        alamat_bisnis: '',
        durasi_tahun: '',
        subtotal: '',
        biaya_tambahan: '',
        total_harga: '',
        status_pembayaran: '',
        status_pemesanan: '',
        invoice_number: '',
      },
      loading: false,
      loadingPayment: false,
    }
  },
  computed: {
    filteredTemplates() {
      if (this.selectedCategory === 'All') {
        return this.templates
      }
      return this.templates.filter((tpl) => tpl.kategori === this.selectedCategory)
    },
    filteredTemplatesLimited() {
      const filtered =
        this.selectedCategory === 'All'
          ? this.templates
          : this.templates.filter((t) => t.kategori === this.selectedCategory)

      return filtered.slice(0, 12)
    },
    totalPages() {
      const filtered =
        this.selectedCategory === 'All'
          ? this.templates
          : this.templates.filter((t) => t.kategori === this.selectedCategory)
      return Math.ceil(filtered.length / this.perPage)
    },
    paginatedTemplates() {
      const start = (this.currentPage - 1) * this.perPage
      return this.templates.slice(start, start + this.perPage)
    },
    selectedTemplateName() {
      const tpl = this.templates.find((t) => t.id === this.form.template_id)
      return tpl ? tpl.judul : 'Belum ada template dipilih'
    },
    totalBiaya() {
      let tambahan = 0
      if (this.form.paket === 'Lite') {
        if (this.form.durasi_tahun == 2) tambahan = 400000
        if (this.form.durasi_tahun == 3) tambahan = 800000
      } else if (this.form.paket === 'Regular') {
        if (this.form.durasi_tahun == 2) tambahan = 700000
        if (this.form.durasi_tahun == 3) tambahan = 1400000
      } else if (this.form.paket === 'Pro') {
        if (this.form.durasi_tahun == 2) tambahan = 1100000
        if (this.form.durasi_tahun == 3) tambahan = 2200000
      }
      return this.form.harga + tambahan
    },
    paginatedTemplatesFiltered() {
      const filtered =
        this.selectedCategory === 'All'
          ? this.templates
          : this.templates.filter((t) => t.kategori === this.selectedCategory)

      const start = (this.currentPage - 1) * this.perPage
      return filtered.slice(start, start + this.perPage)
    },
  },

  mounted() {
    this.fetchCategories()
    this.fetchTemplates()
    $(window).scroll(function () {
      var scroll = $(window).scrollTop()
      var box = $('.header-text').height()
      var header = $('header').height()

      if (scroll >= box - header) {
        $('header').addClass('background-header')
      } else {
        $('header').removeClass('background-header')
      }
    })

    if ($('.menu-trigger').length) {
      $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active')
        $('.header-area .nav').slideToggle(200)
      })
    }

    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          var width = $(window).width()
          if (width < 991) {
            $('.menu-trigger').removeClass('active')
            $('.header-area .nav').slideUp(200)
          }
          $('html,body').animate(
            {
              scrollTop: target.offset().top + 1,
            },
            700,
          )
          return false
        }
      }
    })

    $(document).ready(function () {
      $(document).on('scroll', this.onScroll)

      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
        e.preventDefault()
        $(document).off('scroll')

        $('.scroll-to-section a').each(function () {
          $(this).removeClass('active')
        })
        $(this).addClass('active')

        var target = this.hash,
          menu = target
        var target = $(this.hash)
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: target.offset().top + 1,
            },
            500,
            'swing',
            function () {
              window.location.hash = target
              $(document).on('scroll', this.onScroll)
            },
          )
      })
    })

    this.onScroll = function () {
      var scrollPos = $(document).scrollTop()
      $('.nav a').each(function () {
        var currLink = $(this)
        var refElement = $(currLink.attr('href'))
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $('.nav ul li a').removeClass('active')
          currLink.addClass('active')
        } else {
          currLink.removeClass('active')
        }
      })
    }

    this.mobileNav = function () {
      var width = $(window).width()
      $('.submenu').on('click', function () {
        if (width < 767) {
          $('.submenu ul').removeClass('active')
          $(this).find('ul').toggleClass('active')
        }
      })
    }
    const startYear = 2025
    const currentYear = new Date().getFullYear()
    const yearText = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`
    document.getElementById('copyright').innerHTML =
      `Copyright © ${yearText} <b>DiveraTech</b>. All Rights Reserved. <br />`
  },
  methods: {
    goToPage(page) {
      this.currentPage = page
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
    openModal() {
      this.showModal = true
      document.body.classList.add('no-scroll')
    },
    closeModal() {
      this.showModal = false
      document.body.classList.remove('no-scroll')
    },
    pilihPaket(paket, harga) {
      this.form.paket = paket
      this.form.harga = harga
    },
    async fetchCategories() {
      try {
        const response = await axios.get(this.baseUrl + 'data-kategori-templates')
        if (response.data && Array.isArray(response.data)) {
          this.categories = ['All', ...response.data.map((cat) => cat.value)]
        }
      } catch (error) {
        console.error('Gagal ambil kategori:', error)
      }
    },
    async fetchTemplates() {
      try {
        const response = await axios.get(this.baseUrl + 'data-templates')
        if (response.data && Array.isArray(response.data)) {
          this.templates = response.data
        }
      } catch (error) {
        console.error('Gagal ambil templates:', error)
      }
    },
    async submitOrder() {
      try {
        this.loading = true
        // Hitung subtotal, biaya tambahan, dan total
        this.form.subtotal = this.form.harga
        this.form.biaya_tambahan = this.totalBiaya - this.form.harga
        this.form.total_harga = this.totalBiaya

        // Buat FormData
        const formData = new FormData()
        for (const key in this.form) {
          if (this.form[key] !== undefined && this.form[key] !== null) {
            formData.append(key, this.form[key])
          }
        }

        // POST ke Laravel (CSRF sudah di-except)
        const response = await axios.post('https://backoffice.diveratech.site/api/orders', formData)
        this.form.invoice_number = response.data.data.invoice_number
        // Jika sukses, ambil snap_token dan panggil Midtrans
        if (response.data.success) {
          const snapToken = response.data.snap_token

          window.snap.pay(snapToken, {
            onSuccess: async (result) => {
              // console.log('Payment success:', result)
              this.loadingPayment = true

              try {
                // Panggil endpoint Laravel untuk update status & kirim email
                const successResponse = await axios.post(
                  `https://backoffice.diveratech.site/api/payment-success`,
                  {
                    order_id: this.form.invoice_number, // pastikan invoice_number tersimpan di form
                  },
                )

                if (successResponse.data.success) {
                  alert('Pembayaran berhasil! Email konfirmasi telah dikirim.')
                  window.location.reload()
                }
              } catch (err) {
                console.error('Gagal update status pembayaran:', err)
                alert('Pembayaran berhasil tapi gagal kirim email. Hubungi admin.')
              } finally {
                this.loadingPayment = false // selesai spinner email
              }
            },
            onPending: (result) => {
              console.log('Payment pending:', result)
            },
            onError: (result) => {
              console.error('Payment failed:', result)
            },
            onClose: () => {
              console.log('Payment popup closed without finishing')
            },
          })
        }
      } catch (error) {
        console.error('Checkout gagal:', error.response?.data || error)
        alert('Terjadi kesalahan saat membuat order, coba lagi.')
      } finally {
        this.loading = false // selesai loading
      }
    },
  },
}
</script>
