jQuery(document).ready(function(){var e,t,n,o;if(jQuery(".comment-respond .comment-reply-title").length&&!jQuery(".comment-respond .comment-reply-title").parents(".fusion-comments-tb").length&&!jQuery(".comment-respond .comment-reply-title").parents(".woocommerce-tabs").length){for(e=avadaCommentVars.title_style_type.split(" "),t="",o=0;o<e.length;o++)t+=" sep-"+e[o];jQuery("body").hasClass("rtl")?jQuery(".comment-respond .comment-reply-title").addClass("title-heading-right"):jQuery(".comment-respond .comment-reply-title").addClass("title-heading-left"),n=' style="margin-top:'+avadaCommentVars.title_margin_top+";margin-bottom:"+avadaCommentVars.title_margin_bottom+';"',jQuery(".comment-respond .comment-reply-title").wrap('<div class="fusion-title title fusion-title-size-three'+t+'"'+n+"></div>"),-1===t.indexOf("underline")&&jQuery(".comment-respond .comment-reply-title").parent().append('<div class="title-sep-container"><div class="title-sep'+t+' "></div></div>')}jQuery(".textarea-comment").each(function(){jQuery(this).css("max-width",jQuery("#content").width())}),jQuery(window).on("fusion-resize-horizontal",function(){jQuery(".textarea-comment").each(function(){jQuery(this).css("max-width",jQuery("#content").width())})})});;jQuery(document).ready(function(){jQuery(".fusion-footer .fusion-footer-widget-area .fusion-column").each(function(){jQuery(this).is(":empty")&&jQuery(this).css("margin-bottom","0")}),jQuery(".fusion-social-links-footer").find(".fusion-social-networks").children().length||(jQuery(".fusion-social-links-footer").hide(),jQuery(".fusion-footer-copyright-area .fusion-copyright-notice").css("padding-bottom","0"))});;function avadaAddQuantityBoxes(t){var a,e=!1;t||(t=".qty"),(a=jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").find(t)).length&&(jQuery.each(a,function(t,a){"date"===jQuery(a).prop("type")||"hidden"===jQuery(a).prop("type")||jQuery(a).parent().parent().hasClass("tribe-block__tickets__item__quantity__number")||jQuery(a).parent().hasClass("buttons_added")||(jQuery(a).parent().addClass("buttons_added").prepend('<input type="button" value="-" class="minus" />'),jQuery(a).addClass("input-text").after('<input type="button" value="+" class="plus" />'),e=!0)}),e&&(jQuery("input"+t+":not(.product-quantity input"+t+")").each(function(){var t=parseFloat(jQuery(this).attr("min"));t&&0<t&&parseFloat(jQuery(this).val())<t&&jQuery(this).val(t)}),jQuery(".plus, .minus").unbind("click"),jQuery(".plus, .minus").on("click",function(){var a=jQuery(this).parent().find(t),e=parseFloat(a.val()),n=parseFloat(a.attr("max")),i=parseFloat(a.attr("min")),u=a.attr("step");e&&""!==e&&"NaN"!==e||(e=0),""!==n&&"NaN"!==n||(n=""),""!==i&&"NaN"!==i||(i=0),"any"!==u&&""!==u&&void 0!==u&&"NaN"!==parseFloat(u)||(u=1),jQuery(this).is(".plus")?n&&(n==e||e>n)?a.val(n):a.val(e+parseFloat(u)):i&&(i==e||e<i)?a.val(i):0<e&&a.val(e-parseFloat(u)),a.trigger("change")})))}function compositeAddQuantityBoxes(){avadaAddQuantityBoxes()}jQuery(window).on("load",function(){avadaAddQuantityBoxes()}),jQuery(document).ajaxComplete(function(){avadaAddQuantityBoxes()}),jQuery(document).ready(function(){jQuery(".yith-wacp-mini-cart-icon").on("click",function(){setTimeout(function(){avadaAddQuantityBoxes()},100)})}),jQuery(".composite_data").length&&jQuery(".composite_data").on("wc-composite-initializing",function(t,a){a.actions.add_action("component_selection_details_animated",compositeAddQuantityBoxes,10)});;function fusionGetScrollOffset(){var t,e="function"==typeof getAdminbarHeight?getAdminbarHeight():0,o="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,n=parseInt(e+o+1,10);return jQuery(".fusion-tb-header").length&&"function"==typeof fusionGetStickyOffset?(t=fusionGetStickyOffset())?t+1:e:n}jQuery(document).ready(function(){jQuery("body").scrollspy({target:".fusion-menu",offset:fusionGetScrollOffset()}),jQuery(window).on("load fusion-sticky-change fusion-sticky-scroll-change",function(){jQuery("body").data()["bs.scrollspy"].options.offset=fusionGetScrollOffset()}),jQuery(window).on("fusion-sticky-transition-change",function(){setTimeout(function(){jQuery("body").data()["bs.scrollspy"].options.offset=fusionGetScrollOffset()},300)})});;function calcSelectArrowDimensions(e){var i=".avada-select-parent .select-arrow, .gravity-select-parent .select-arrow, .wpcf7-select-parent .select-arrow";(void 0!==e?jQuery(e).find(i):jQuery(i)).filter(":visible").each(function(){0<jQuery(this).prev().innerHeight()&&jQuery(this).css({height:jQuery(this).prev().innerHeight(),width:jQuery(this).prev().innerHeight(),"line-height":jQuery(this).prev().innerHeight()+"px"})})}jQuery(window).on("load",function(){calcSelectArrowDimensions(),setTimeout(function(){calcSelectArrowDimensions()},100)}),jQuery(window).on("fusion-dynamic-content-render",function(e,i){calcSelectArrowDimensions(i)});