import './polyfills.server.mjs';
import{Ra as e,z as t}from"./chunk-NKLVYMZE.mjs";import"./chunk-VVCT4QZE.mjs";var u=e.create({name:"superscript",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"sup"},{style:"vertical-align",getAttrs(r){return r!=="super"?!1:null}}]},renderHTML({HTMLAttributes:r}){return["sup",t(this.options.HTMLAttributes,r),0]},addCommands(){return{setSuperscript:()=>({commands:r})=>r.setMark(this.name),toggleSuperscript:()=>({commands:r})=>r.toggleMark(this.name),unsetSuperscript:()=>({commands:r})=>r.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-.":()=>this.editor.commands.toggleSuperscript()}}});export{u as Superscript,u as default};
