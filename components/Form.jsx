import Link from "next/link";

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full w-max-full flex-start flex-col'>
      <span className='green_gradient head_text text_left'>{type} Post</span>
      <p className='desc text-left max-w-md'>{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
      </p>
      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}<span className='font-normal'>(#product, #webdevelopment, #idea, etc.)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>
        <div className='flex-end mx-3 gap-4'><Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
          <button type='submit' disabled={submitting}>
            <span className="blue_gradient text-lg border border-blue-500 px-5 py-1 rounded-md ">{submitting ? `${type}ing...` : type} Post</span>
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form