/* VIPX shared/common.js v2 */
var NAV_CATS = [
  {id:'home', key:'nav_home', icon:'✨', href:'/'},
  {id:'trending', key:'nav_trending', icon:'🔥', href:'/trending'},
  {id:'crypto', key:'nav_crypto', icon:'₿', href:'/crypto'},
  {id:'sports', key:'nav_sports', icon:'🏆', href:'/sports'},
  {id:'events', key:'nav_events', icon:'🌐', href:'/events'},
  {id:'atm', key:'nav_atm', icon:'🪙', href:'/atm'}
];
var MOBILE_CATS = ['home','trending','crypto','sports','profile'];

var I18N = {
'zh-CN':{nav_home:'首页',nav_trending:'热门',nav_crypto:'加密货币',nav_sports:'体育赛事',nav_events:'国际事件',nav_atm:'关于VINO',nav_profile:'我的',
hero_badge:'⚡ 全球顶级 Web3 预测平台',hero_title1:'预测未来',hero_title2:'赢取真实回报',
hero_sub:'VIPX 是面向全球用户的去中心化预测市场，覆盖加密、体育与全球事件，由 VINO Labs 生态与 ENI 公链提供毫秒级实时结算基础设施',
btn_connect:'🔗 连接钱包开始预测',btn_explore:'🚀 探索全部市场',
lbl_tvl:'平台总锁仓量',lbl_vol24:'24H 总交易量',lbl_markets:'活跃市场',lbl_users:'链上活跃地址',lbl_updated:'刚刚更新',
sec_ticker:'实时行情',sec_trending:'热门市场',sec_crypto:'加密货币',sec_football:'足球 / 世界杯',sec_basketball:'篮球',
sec_star:'世界杯明星球员',sec_wc:'🏆 2026 世界杯专区',sec_wc_groups:'小组积分榜',sec_wc_odds:'冠军赔率',sec_sports:'体育赛事',flt_all:'全部',flt_football:'足球',flt_basketball:'篮球',flt_worldcup:'世界杯',flt_esports:'电竞',flt_snooker:'台球',
foot_desc:'全球顶级 Web3 预测平台 · 由 VINO Labs 生态与 ENI 公链提供实时结算基础设施',foot_markets:'市场',foot_eco:'生态',foot_account:'账户',
profile_title:'我的',my_bets:'我的下注',wallet_connect:'连接钱包',wallet_disconnect:'断开连接',language:'语言 Language',theme:'主题模式',
empty_bets:'暂无下注记录',go_predict:'去预测',view_all:'查看全部',live:'直播中',all_markets:'全部市场'},
'zh-TW':{nav_home:'首頁',nav_trending:'熱門',nav_crypto:'加密貨幣',nav_sports:'體育賽事',nav_events:'國際事件',nav_atm:'關於VINO',nav_profile:'我的',
hero_badge:'⚡ 全球頂級 Web3 預測平台',hero_title1:'預測未來',hero_title2:'贏取真實回報',
hero_sub:'VIPX 是面向全球用戶的去中心化預測市場，涵蓋加密、體育與全球事件，由 VINO Labs 生態與 ENI 公鏈提供毫秒級即時結算基礎設施',
btn_connect:'🔗 連接錢包開始預測',btn_explore:'🚀 探索全部市場',
lbl_tvl:'平台總鎖倉量',lbl_vol24:'24H 總交易量',lbl_markets:'活躍市場',lbl_users:'鏈上活躍地址',lbl_updated:'剛剛更新',
sec_ticker:'即時行情',sec_trending:'熱門市場',sec_crypto:'加密貨幣',sec_football:'足球 / 世界盃',sec_basketball:'籃球',
sec_star:'世界盃明星球員',sec_wc:'🏆 2026 世界盃專區',sec_wc_groups:'小組積分榜',sec_wc_odds:'冠軍賠率',sec_sports:'體育賽事',flt_all:'全部',flt_football:'足球',flt_basketball:'籃球',flt_worldcup:'世界盃',flt_esports:'電競',flt_snooker:'桌球',
foot_desc:'全球頂級 Web3 預測平台 · 由 VINO Labs 生態與 ENI 公鏈提供即時結算基礎設施',foot_markets:'市場',foot_eco:'生態',foot_account:'帳戶',
profile_title:'我的',my_bets:'我的下注',wallet_connect:'連接錢包',wallet_disconnect:'斷開連接',language:'語言 Language',theme:'主題模式',
empty_bets:'暫無下注記錄',go_predict:'去預測',view_all:'查看全部',live:'直播中',all_markets:'全部市場'},
'en':{nav_home:'Home',nav_trending:'Trending',nav_crypto:'Crypto',nav_sports:'Sports',nav_events:'World Events',nav_atm:'About VINO',nav_profile:'Profile',
hero_badge:'⚡ Global Top-Tier Web3 Prediction Platform',hero_title1:'Predict the Future',hero_title2:'Win Real Rewards',
hero_sub:'VIPX is a decentralized prediction market for the world: crypto, sports and global events, powered by the VINO Labs ecosystem and the ENI chain millisecond settlement infrastructure',
btn_connect:'🔗 Connect Wallet to Predict',btn_explore:'🚀 Explore All Markets',
lbl_tvl:'Total Value Locked',lbl_vol24:'24H Volume',lbl_markets:'Active Markets',lbl_users:'On-chain Active Addresses',lbl_updated:'Updated just now',
sec_ticker:'Live Prices',sec_trending:'Trending Markets',sec_crypto:'Crypto',sec_football:'Football / World Cup',sec_basketball:'Basketball',
sec_star:'World Cup Star Players',sec_wc:'🏆 2026 World Cup Zone',sec_wc_groups:'Group Standings',sec_wc_odds:'Champion Odds',sec_sports:'Sports',flt_all:'All',flt_football:'Football',flt_basketball:'Basketball',flt_worldcup:'World Cup',flt_esports:'Esports',flt_snooker:'Snooker',
foot_desc:'Global top-tier Web3 prediction platform, powered by the VINO Labs ecosystem and ENI chain settlement infrastructure',foot_markets:'Markets',foot_eco:'Ecosystem',foot_account:'Account',
profile_title:'Profile',my_bets:'My Bets',wallet_connect:'Connect Wallet',wallet_disconnect:'Disconnect',language:'Language',theme:'Theme',
empty_bets:'No bets yet',go_predict:'Start Predicting',view_all:'View All',live:'LIVE',all_markets:'All Markets'}
};
var LOCALES = [{id:'zh-CN',label:'简体中文'},{id:'zh-TW',label:'繁體中文'},{id:'en',label:'English'}];

var state = { connected:false, address:null, chainId:null, myBets:[] };
var PLATFORM_FEE_BPS = 1000;

function getLocale(){ return localStorage.getItem('vipx_locale') || 'zh-CN'; }
function t(key){ var loc = getLocale(); return (I18N[loc] && I18N[loc][key]) || (I18N['zh-CN'][key]) || key; }
function setLocale(loc){
  localStorage.setItem('vipx_locale', loc);
  applyI18N();
  var hdr = document.querySelector('header');
  if(hdr) hdr.innerHTML = buildHeader(window.__vipxPage);
  var nav = document.getElementById('mobileNav');
  if(nav) nav.innerHTML = buildMobileNav(window.__vipxPage);
  refreshWalletUI();
  renderLangUI();
}
function applyI18N(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.title = document.title; // no-op guard
}
function renderLangUI(){
  document.querySelectorAll('.lang-card').forEach(function(el){
    el.classList.toggle('active', el.getAttribute('data-locale') === getLocale());
  });
  document.querySelectorAll('.lang-opt').forEach(function(el){
    el.classList.toggle('active', el.getAttribute('data-locale') === getLocale());
  });
}

function applyTheme(mode){
  var m = mode || localStorage.getItem('vipx_themeMode') || 'dark';
  var real = m;
  if(m === 'auto'){ var h = new Date().getHours(); real = (h>=7 && h<19) ? 'light' : 'dark'; }
  document.documentElement.setAttribute('data-theme', real === 'light' ? 'light' : 'dark');
}
function setTheme(mode){ localStorage.setItem('vipx_themeMode', mode); applyTheme(mode); }
function toggleThemeBtn(){ var cur = localStorage.getItem('vipx_themeMode') || 'dark'; setTheme(cur==='dark'?'light':'dark'); }

function toggleLangMenu(){
  var m = document.getElementById('langMenu');
  if(m) m.classList.toggle('show');
}
document.addEventListener('click', function(e){
  var wrap = document.querySelector('.lang-wrap');
  if(wrap && !wrap.contains(e.target)){
    var m = document.getElementById('langMenu');
    if(m) m.classList.remove('show');
  }
});

function toast(msg){
  var el = document.getElementById('toast');
  if(!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(function(){ el.classList.remove('show'); }, 2600);
}

async function connectMetaMask(){
  if(typeof window.ethereum === 'undefined'){ toast(t('wallet_connect')+': MetaMask not found'); return; }
  try{
    var accounts = await window.ethereum.request({ method:'eth_requestAccounts' });
    state.connected = true; state.address = accounts[0];
    localStorage.setItem('vipx_wallet', state.address);
    toast('✅ ' + t('wallet_connect'));
    refreshWalletUI();
  }catch(e){ toast('Connection failed'); }
}
function disconnectWallet(){
  state.connected=false; state.address=null;
  localStorage.removeItem('vipx_wallet');
  toast(t('wallet_disconnect'));
  refreshWalletUI();
}
function autoReconnect(){
  var saved = localStorage.getItem('vipx_wallet');
  if(saved){ state.connected = true; state.address = saved; refreshWalletUI(); }
}
function shortAddr(a){ return a ? (a.slice(0,6)+'…'+a.slice(-4)) : ''; }
function refreshWalletUI(){
  var btn = document.getElementById('walletBtn');
  if(btn) btn.textContent = state.connected ? shortAddr(state.address) : t('wallet_connect');
  var pbtn = document.getElementById('profileWalletBtn');
  if(pbtn) pbtn.textContent = state.connected ? ('🟢 ' + shortAddr(state.address)) : ('🔗 ' + t('wallet_connect'));
}

function loadMyBets(){
  try{ state.myBets = JSON.parse(localStorage.getItem('vipx_mybets') || '[]'); }catch(e){ state.myBets = []; }
  return state.myBets;
}
function renderMyBets(){
  var el = document.getElementById('betsList');
  if(!el) return;
  var bets = loadMyBets();
  if(!bets.length){
    el.innerHTML = '<div class="bet-empty">'+t('empty_bets')+'<br><br><button class="btn btn-grad" onclick="location.href=\'/\'">'+t('go_predict')+'</button></div>';
    return;
  }
  el.innerHTML = bets.map(function(b){ return '<div class="bet-card"><b>'+(b.title||'')+'</b></div>'; }).join('');
}

function buildHeader(active){
  var links = NAV_CATS.map(function(c){
    return '<a href="'+c.href+'" class="'+(c.id===active?'active':'')+'">'+c.icon+' '+t(c.key)+'</a>';
  }).join('');
  var langOpts = LOCALES.map(function(l){
    return '<button class="lang-opt '+(l.id===getLocale()?'active':'')+'" data-locale="'+l.id+'" onclick="setLocale(\''+l.id+'\')">'+l.label+'</button>';
  }).join('');
  return '<div class="hdr-inner"><a href="/" class="hdr-logo"><img src="/shared/logo.svg" alt="VIPX"/><span>VI<span class="hl-vi">PX</span></span></a>'
    + '<nav class="hdr-nav">'+links+'</nav>'
    + '<div class="hdr-actions">'
    + '<div class="lang-wrap"><button class="btn btn-icon" onclick="toggleLangMenu()">🌐</button><div class="lang-menu" id="langMenu">'+langOpts+'</div></div>'
    + '<button class="btn btn-icon" onclick="toggleThemeBtn()">🌙</button>'
    + '<a href="/profile" class="btn btn-icon" title="'+t('profile_title')+'">👤</a>'
    + '<button class="btn" id="walletBtn" onclick="connectMetaMask()">'+t('wallet_connect')+'</button>'
    + '</div></div>';
}
function buildMobileNav(active){
  return NAV_CATS.filter(function(c){ return MOBILE_CATS.indexOf(c.id) !== -1; }).map(function(c){
    return '<a href="'+c.href+'" class="mn-item '+(c.id===active?'active':'')+'"><span class="mn-ic">'+c.icon+'</span>'+t(c.key)+'</a>';
  }).join('');
}

/* --- live data simulation for a "real-time" feel --- */
function jitter(val, pct){
  var d = (Math.random()*2-1) * pct * val;
  return val + d;
}
function fmtUsd(n){
  if(n >= 1e9) return '$'+(n/1e9).toFixed(2)+'B';
  if(n >= 1e6) return '$'+(n/1e6).toFixed(2)+'M';
  if(n >= 1e3) return '$'+(n/1e3).toFixed(1)+'K';
  return '$'+n.toFixed(2);
}
function startLiveSim(){
  document.querySelectorAll('[data-live-usd]').forEach(function(el){
    el.__base = parseFloat(el.getAttribute('data-live-usd'));
  });
  document.querySelectorAll('[data-live-price]').forEach(function(el){
    el.__base = parseFloat(el.getAttribute('data-live-price'));
  });
  setInterval(function(){
    document.querySelectorAll('[data-live-usd]').forEach(function(el){
      var v = jitter(el.__base, 0.006);
      el.textContent = fmtUsd(v);
    });
    document.querySelectorAll('[data-live-price]').forEach(function(el){
      var v = jitter(el.__base, 0.004);
      var dec = el.__base < 1 ? 4 : 2;
      el.textContent = '$'+v.toFixed(dec);
    });
    var ts = document.getElementById('liveUpdatedAt');
    if(ts) ts.textContent = t('lbl_updated');
  }, 2400);
}

function filterSports(cat){
  document.querySelectorAll('.cat-pill[data-cat]').forEach(function(p){ p.classList.toggle('active', p.getAttribute('data-cat')===cat); });
  document.querySelectorAll('[data-sport]').forEach(function(card){
    var show = (cat === 'all') || (card.getAttribute('data-sport') === cat);
    card.style.display = show ? '' : 'none';
  });
}
function initCommon(pageId){
  window.__vipxPage = pageId;
  applyTheme();
  var hdr = document.querySelector('header');
  if(hdr) hdr.innerHTML = buildHeader(pageId);
  var nav = document.getElementById('mobileNav');
  if(nav) nav.innerHTML = buildMobileNav(pageId);
  applyI18N();
  renderLangUI();
  autoReconnect();
  refreshWalletUI();
  if(pageId === 'profile') renderMyBets();
  startLiveSim();
}
