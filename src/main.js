// #region agent log
fetch('http://127.0.0.1:7242/ingest/b6ea2c2b-23a1-4f9e-bdc5-74d585ae831d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:1',message:'main.js loaded',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
// #endregion
import './style.css'
// #region agent log
fetch('http://127.0.0.1:7242/ingest/b6ea2c2b-23a1-4f9e-bdc5-74d585ae831d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:5',message:'style.css import completed',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C'})}).catch(()=>{});
// #endregion