const canonical='https://meemansak-bharti-connect.quirkyrhea64.chatgpt.site';
document.querySelectorAll('[data-share]').forEach(button=>button.addEventListener('click',async()=>{
 const status=document.getElementById('status');
 try{if(navigator.share){await navigator.share({title:'Meemansak Bharti',text:'Wedditors · Capture Camera Productions — connect with Meemansak Bharti',url:canonical});status.textContent='';}else{await navigator.clipboard.writeText(canonical);status.textContent='Link copied. Ready to share.';}}catch(error){if(error.name!=='AbortError'){status.textContent='Copy this link to share: '+canonical;}}
}));
