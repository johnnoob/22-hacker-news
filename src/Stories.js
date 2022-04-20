import React from 'react'
import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()
  if (isLoading) {
    return <div className="loading"></div>
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID: id, title, url, num_comments, points, author } = story
        return (
          <article className="story" key={id}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points}分 由<span>{author}撰寫 |</span> {num_comments}則意見
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                閱讀更多
              </a>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                刪除
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
