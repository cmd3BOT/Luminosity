import{newTokenData,URL,isJson,clipboardCopy}from"./script.js";let title,tagline,content;const saveBtn=document.querySelector("#save-changes"),draftId=document.querySelector("[name='draft_id']").value,toast=document.getElementById("draft-update-toast"),toastBody=toast.querySelector(".toast-body");function updateVars(){title=document.querySelector("#title").value,tagline=document.querySelector("#tagline").value,content=document.querySelector(".ql-editor").innerHTML}function changeSaveBtnState(){let e=title,t=tagline,n=content;updateVars(),e==title&&t==tagline&&n==content||(saveBtn.classList.add("btn-info"),saveBtn.classList.remove("btn-success"),saveBtn.innerText="Save Changes")}function updateDraft(){updateVars();const e=newTokenData({title:title,tagline:tagline,content:content,draft_id:draftId});toastBody.innerHTML='Saving Changes   <i class="fas fa-circle-notch fa-spin"></i>';let t=new bootstrap.Toast(toast,{delay:15e3});t.show(),fetch(`${URL}/ajax/write/update-draft`,{method:"POST",body:e}).then(e=>e.text()).then(e=>{if(isJson(e)){let t=JSON.parse(e);200===t.status?(toastBody.innerHTML="Saved Changes",saveBtn.classList.remove("btn-info"),saveBtn.classList.add("btn-success"),saveBtn.innerText="Saved",updateVars()):(delete t.status,toastBody.innerHTML=`${t[Object.keys(t)[0]]}`)}setTimeout(function(){t.hide()},2e3)})}setTimeout(function(){updateVars(),window.setInterval(changeSaveBtnState,1e3)},2e3),document.querySelector("#rename").addEventListener("click",function(){let e=prompt("Enter new draft name: ")??" ";const t=newTokenData({new_name:e,draft_id:draftId});toastBody.innerHTML="Changing Name";let n=new bootstrap.Toast(toast,{delay:5e3});n.show(),fetch(`${URL}/ajax/write/rename-draft`,{method:"POST",body:t}).then(e=>e.text()).then(t=>{if(isJson(t)){let n=JSON.parse(t);200===n.status?(toastBody.innerHTML="Renamed Draft",document.querySelector("#draft_name").innerText=e):(delete n.status,toastBody.innerHTML=`${n[Object.keys(n)[0]]}`)}setTimeout(function(){n.hide()},3e3)})}),document.querySelector("#delete").addEventListener("click",function(){let e=prompt("Enter username to delete draft: ")??" ";const t=newTokenData({username:e,draft_id:draftId});toastBody.innerHTML="Delete";let n=new bootstrap.Toast(toast,{delay:5e3});n.show(),fetch(`${URL}/ajax/write/delete-draft`,{method:"POST",body:t}).then(e=>e.text()).then(e=>{if(isJson(e)){let t=JSON.parse(e);200===t.status?location.replace(`${URL}/write/drafts`):(delete t.status,toastBody.innerHTML=`${t[Object.keys(t)[0]]}`)}setTimeout(function(){n.hide()},3e3)})}),saveBtn.addEventListener("click",updateDraft),document.addEventListener("keydown",e=>{e.ctrlKey&&"s"===e.key&&(e.preventDefault(),updateDraft())}),document.querySelector("#copy-link").addEventListener("click",function(){clipboardCopy(`${URL}/write/draft/${draftId}`),toastBody.innerHTML="Link copied to clipboard",new bootstrap.Toast(toast,{delay:2e3}).show()})