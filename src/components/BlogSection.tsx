import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
    title: "The Surprising Reason Your Home Needs Deep Cleaning",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...",
  },
  {
    img: "https://images.unsplash.com/photo-1527515637462-cff94eebd21f?w=400&q=80",
    title: "Top 5 Tips For Keeping Your Office Spotless",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    title: "Why Professional Carpet Cleaning Is Essential",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...",
  },
  {
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
    title: "How To Choose The Right Cleaning Service For You",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...",
  },
];

const BlogSection = () => (
  <section className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-widest uppercase text-sm mb-3 font-semibold">Blog</p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Our Latest News</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Awesome site on the top advertising a business online includes assembling. Having the most keep.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col sm:flex-row"
          >
            <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden shrink-0">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <h3 className="font-display font-bold text-base mb-2 leading-snug">{post.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{post.excerpt}</p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
