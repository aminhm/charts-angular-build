import './polyfills.server.mjs';
import{Ra as r,z as t}from"./chunk-NKLVYMZE.mjs";import"./chunk-VVCT4QZE.mjs";var s=r.create({name:"underline",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:e=>e.includes("underline")?{}:!1}]},renderHTML({HTMLAttributes:e}){return["u",t(this.options.HTMLAttributes,e),0]},addCommands(){return{setUnderline:()=>({commands:e})=>e.setMark(this.name),toggleUnderline:()=>({commands:e})=>e.toggleMark(this.name),unsetUnderline:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline(),"Mod-U":()=>this.editor.commands.toggleUnderline()}}});export{s as Underline,s as default};
