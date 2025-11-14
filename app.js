document.querySelectorAll('.nav-link').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target=btn.dataset.page;
    document.querySelectorAll('.nav-link').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('visible'));
    document.getElementById(target).classList.add('visible');
  });
});

const table=document.getElementById('inventoryTable');
document.getElementById('addRowBtn').onclick=()=>{
  const r=document.createElement('tr');
  r.innerHTML='<td><input type="checkbox"></td><td contenteditable="true">New Title</td><td contenteditable="true">Author</td><td contenteditable="true">0000</td>';
  table.querySelector('tbody').appendChild(r);
};
document.getElementById('deleteSelectedBtn').onclick=()=>{
  table.querySelectorAll('tbody tr').forEach(r=>{
    if(r.querySelector('input').checked) r.remove();
  });
};
document.getElementById('exportCsvBtn').onclick=()=>{
  let csv='Title,Author,BookNumber\n';
  table.querySelectorAll('tbody tr').forEach(r=>{
    const c=r.querySelectorAll('td');
    csv+=`"${c[1].innerText}","${c[2].innerText}","${c[3].innerText}"\n`;
  });
  const blob=new Blob([csv],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='inventory.csv'; a.click();
};
