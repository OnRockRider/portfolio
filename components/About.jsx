const { assets, infoList, toolsData } = require("@/assets/assets")
const { default: Image } = require("next/image")
const { motion } = require("motion/react") 

const About = ({IsDarkMode}) => {
    return(
        <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
        initial={{opacity:0 }}
         whileInView={{opacity:1 }}
         transition={{duration:1}}>

            <motion.h4
            initial={{opacity:0 , y: -20 }}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1,delay:0.3}}

            className="text-center mb-2 text-lg font-ovo">
                Introdution</motion.h4>
            <motion.h2
              initial={{opacity:0 , y: -20 }}
              whileInView={{opacity:1, y: 0}}
              transition={{duration:0.5 ,delay:0.5}}

             className="text-center text-5xl font-Ovo">
                About me</motion.h2>

                <motion.div
                initial={{opacity:0 }}
                whileInView={{opacity:1}}
                transition={{duration:0.8}}

                 className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

                    < motion.div
                     initial={{opacity:0 , scale:0.9 }}
                     whileInView={{opacity:1, scale: 1}}
                     transition={{duration:0.6 , delay:0.8 }}

                    className="w-64 sm:w-80 rounded-3x1 max-w-none">
                        <Image src={assets.user_image} alt="user" className="w-full 
                        rounded-3x1" />
                    </motion.div>

                    <motion.div
                     initial={{opacity:0  }}
                     whileInView={{opacity:1}}
                     transition={{duration:0.56, }}

                     className="flex-1">
                        <p className="mb-10 max-w-2xl font-Ovo">
                        My external college started, so I had some free time. I have done govt sponsored web developer course .i gave computer base exam and i am getting my certificate in january and i am going to complete it i apply job and internship
                        </p>

                        <motion.ui
                        initial={{opacity:0 }}
                        whileInView={{opacity:1}}
                        transition={{duration:0.8 ,delay: 1}}

                         className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x">
                            {infoList.map(({icon,iconDark,title,description},
                                index
                            )=>(
                                <motion.li
                                whileHover={{scale:1.05}}
                                 className="border-[0.5px] border-gray -400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover: -translate-y-1 duration-500 hover: shadow-black dark:border-white dark:hover:shaow-white dark:hover:bg-darkhover/50"
                                 key={index}>
                                    <Image src={IsDarkMode ? assets.iconDark : icon} alt={title} className="w-7 mt-3"/>
                                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                    <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                                </motion.li>
                            ))}
                        </motion.ui>

                        <motion.h4 
                        initial={{y:20,opacity:0 }}
                        whileInView={{y: 0, opacity:1 }}
                        transition={{duration:0.5, delay:1.3}}
                        className="my-6 text-gray-700 tont-Ovo dark:text-white/80">Tool i use</motion.h4>

                        <motion.ul 
                         initial={{opacity:0 }}
                         whileInView={{opacity:1}}
                         transition={{duration:1.5 ,delay: 0.6}}
                        
                        className="flex item-center gap-3 sm:gap">
                            {toolsData.map((tool,index)=>(
                                <motion.li
                                whileHover={{scale:1.1}}
                                className="flex items-center justify-center 
                                w-12 sm:w-14 aspect-square  border border-gray-400 
                                 rounded-lg cursor-pointer hover:-translate-y-1
                                 duration-500"
                                key={index}>
                                    <Image src={tool} alt="tool" className="w-5 sm :w-7"/>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>
        </motion.div>
    )
}

export default About