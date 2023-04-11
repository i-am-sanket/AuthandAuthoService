#!/usr/bin/env node

import axios from "axios";
import { Telegraf } from "telegraf"


const bot=new Telegraf("5588338289:AAGANLs0hBevk1YlhFFheq3BDsfWxc4dOSU");
bot.start((ctx)=>{
    ctx.reply("Welcome to code generator");
})
bot.command('anagram',async function (ctx){
    const content=await axios.get("https://raw.githubusercontent.com/singhsanket143/RelevelDSA/master/Module1/anagram.js");
    return ctx.reply(content.data);

});
bot.command('subarraysum',async function(ctx){
    const content=await axios.get("https://raw.githubusercontent.com/singhsanket143/RelevelDSA/master/Module1/check_subarray_sum_zero.js");
    return ctx.reply(content.data);
});
bot.command('countsubarray',async function(ctx){
    const content=await axios.get("https://raw.githubusercontent.com/singhsanket143/RelevelDSA/master/Module1/count_subarray_with_sum_x.js");
    return ctx.reply(content.data);
});
bot.command('cyclerotate',async function(ctx){
    const content=await axios.get("https://raw.githubusercontent.com/singhsanket143/RelevelDSA/master/Module1/cycle_rotate.js");
    return ctx.reply(content.data);
});
bot.command('longestsubarray',async function(ctx){
    const content=await axios.get("https://raw.githubusercontent.com/singhsanket143/RelevelDSA/master/Module1/longest_subarray_with_sum_zero.js");
    return ctx.reply(content.data);
});
bot.command('freq',async function(ctx){
    const content=await axios.get("https://raw.githubusercontent.com/singhsanket143/RelevelDSA/master/Module1/print_freq.js");
    return ctx.reply(content.data);
});
bot.hears('Hi',(ctx)=>{
    return ctx.reply('hello');
})
bot.launch();