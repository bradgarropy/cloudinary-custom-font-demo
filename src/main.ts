import "~/src/style.css"

import {Cloudinary} from "@cloudinary/url-gen"
import {source} from "@cloudinary/url-gen/actions/overlay"
import {scale} from "@cloudinary/url-gen/actions/resize"
import {text} from "@cloudinary/url-gen/qualifiers/source"
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: "bradgarropy",
    },
})

const code = cloudinary
    .image("cloudinary-custom-font-demo/stars")
    .quality("auto")
    .format("auto")
    .resize(scale().width(600))
    .overlay(
        source(
            text(
                `
                  square bois []
                   round bois ()
                   curly bois {}
                  pointy bois <>
                `,
                new TextStyle(
                    "cloudinary-custom-font-demo:CascadiaCode.woff2",
                    36,
                ).fontWeight("bold"),
            ).textColor("white"),
        ),
    )
    .toURL()

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <img src="${code}" />
  </div>
`
