<template>
  <div class="home-container">
    <header class="header">
      <div class="nav-container">
        <h1 class="logo">CineVault</h1>
        <nav class="nav">
          <a href="#" class="nav-link">Originals</a>
          <a href="#" class="nav-link">Library</a>
          <a href="#" class="nav-link">Plans</a>
          <a href="#" class="nav-link">FAQ</a>
          <button class="btn-primary">Start Watching</button>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-content">
        <div class="social-proof">
          <div class="avatars">
            <img
              src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/59145a03-3960-4b58-b8bf-d24d645b070f_320w.webp"
              alt="User"
              class="avatar"
            />
            <img
              src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d92dd0bd-e18b-4459-903b-30cf16d2eae8_320w.webp"
              alt="User"
              class="avatar"
            />
            <img
              src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aa3dc352-fe25-42df-b2e7-3e73fc0e2cd1_320w.webp"
              alt="User"
              class="avatar"
            />
          </div>
          <div class="rating">
            <p class="rating-text">Rated 4.9 • 2M+ members streaming</p>
          </div>
        </div>

        <h1 class="hero-title">Where stories come alive.</h1>

        <p class="hero-description">
          Stream award-winning originals, timeless classics, and exclusive
          premieres. 4K HDR, Dolby Atmos, and zero ads. Your next obsession
          starts here.
        </p>

        <div class="cta-buttons">
          <button class="btn-start">Start Free Trial</button>
          <button class="btn-browse">Browse library</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.home-container {
  position: relative;
  z-index: 1;
  color: white;
}

.header {
  padding: 1.5rem 2rem;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: white;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: background 0.2s;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.15);
}

.hero {
  padding: 8rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 1024px;
  margin: 0 auto;
}

.social-proof {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.avatars {
  display: flex;
  margin-left: -0.5rem;
}

.avatar {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.6);
  margin-left: -0.75rem;
  object-fit: cover;
}

.rating {
  opacity: 0.5;
}

.rating-text {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: fadeSlideIn 1s ease-out 0.2s forwards;
  opacity: 0;
}

.hero-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 42rem;
  margin: 0 auto 2rem;
  line-height: 1.6;
  animation: fadeSlideIn 1s ease-out 0.3s forwards;
  opacity: 0;
}

.cta-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeSlideIn 1s ease-out 0.4s forwards;
  opacity: 0;
}

.btn-start {
  padding: 0.875rem 1.5rem;
  background: rgb(107, 70, 193);
  border: 1px solid rgb(124, 58, 237);
  border-radius: 9999px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-start:hover {
  background: rgb(124, 58, 237);
  transform: translateY(-2px);
}

.btn-browse {
  padding: 0.875rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}

.btn-browse:hover {
  background: rgba(255, 255, 255, 0.1);
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}
</style>
