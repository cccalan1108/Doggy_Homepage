type Nullable<T> = T | null

const root = document.documentElement


const themeToggle = document.getElementById('themeToggle') as Nullable<HTMLButtonElement>
const savedTheme = localStorage.getItem('theme')
if (savedTheme) root.dataset.theme = savedTheme
themeToggle?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next
  localStorage.setItem('theme', next)
})
if (!savedTheme && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
  root.dataset.theme = 'dark'
}

const menuBtn = document.getElementById('menuBtn') as Nullable<HTMLButtonElement>
const navLinks = document.getElementById('navLinks') as Nullable<HTMLUListElement>
menuBtn?.addEventListener('click', () => {
  const show = navLinks?.classList.toggle('show')
  menuBtn.setAttribute('aria-expanded', String(!!show && navLinks?.classList.contains('show')))
})


const year = document.getElementById('year')
if (year) year.textContent = String(new Date().getFullYear())


const sotdDate = document.getElementById('sotdDate') as Nullable<HTMLElement>

;(function startClock(el: Nullable<HTMLElement>) {
  if (!el) return
  const pad = (n: number) => n.toString().padStart(2, '0')

  const tick = () => {
    const d = new Date()
    const text =
      `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
      `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`

    el.textContent = text
    el.setAttribute('aria-label', `現在時間 ${text}`)
    if ((el as any).dateTime !== undefined) {
      (el as HTMLTimeElement).dateTime = d.toISOString()
    }
  }

  tick()
  setInterval(tick, 1000)
})(sotdDate)


document.querySelectorAll<HTMLButtonElement>('[data-accordion] .acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('aria-controls') || ''
    const panel = document.getElementById(id)
    const expanded = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', String(!expanded))
    if (panel) panel.hidden = expanded
  })
})


